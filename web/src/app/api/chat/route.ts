import { NextRequest, NextResponse } from "next/server";
import { OpenRouter } from "@openrouter/sdk";
import type { ChatMessages } from "@openrouter/sdk/models/chatmessages.js";
import { buildSystemPrompt } from "@/data/getSystemPrompt";

export const runtime = "nodejs";

const PRIMARY_MODEL =
  process.env.OPENROUTER_MODEL ?? "meta-llama/llama-3.3-70b-instruct:free";

const FALLBACK_MODELS = [
  "google/gemma-4-31b-it:free",
  "qwen/qwen3-next-80b-a3b-instruct:free",
  "nvidia/nemotron-3-super-120b-a12b:free",
];

const client = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const SYSTEM_PROMPT = buildSystemPrompt();

type ChatCompletion = { choices: Array<{ message: { content?: string | null } }> };

async function sendWithFallback(
  messages: ChatMessages[],
): Promise<string> {
  const modelsToTry = [PRIMARY_MODEL, ...FALLBACK_MODELS];

  for (const model of modelsToTry) {
    try {
      const result = await client.chat.send({
        chatRequest: {
          model,
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          maxTokens: 512,
          temperature: 0.7,
        },
      });
      const completion = result as ChatCompletion;
      return completion.choices[0]?.message?.content ?? "";
    } catch (err: unknown) {
      const status = (err as { statusCode?: number }).statusCode;
      if (status === 429 || status === 404) {
        console.warn(`Model ${model} failed (${status}), trying next...`);
        continue;
      }
      throw err;
    }
  }

  throw new Error("All models exhausted");
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const reply = await sendWithFallback(messages);
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
