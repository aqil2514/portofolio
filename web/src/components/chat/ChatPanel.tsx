"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, X } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatPanelProps {
  onClose: () => void;
}

export function ChatPanel({ onClose }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Aqil's portfolio assistant. Ask me anything about his skills, experience, or projects! 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: Message = { role: "user", content: text };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply ?? "Sorry, something went wrong." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Connection error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="
        fixed bottom-24 right-6 z-200
        w-80 sm:w-96
        flex flex-col
        rounded-2xl overflow-hidden
        border border-white/20
        shadow-2xl shadow-black/40
        bg-[#0d1b2a]/95 backdrop-blur-xl
      "
      style={{ maxHeight: "min(520px, calc(100vh - 120px))" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-xs font-bold text-blue-300">
            A
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Aqil&apos;s Assistant</p>
            <p className="text-xs text-white/40">Portfolio chatbot</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white/40 hover:text-white transition p-1 rounded-lg hover:bg-white/10"
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`
                  max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed
                  ${msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-white/10 text-white/90 rounded-bl-sm"
                  }
                `}
              >
                {msg.role === "assistant" ? (
                  <ReactMarkdown
                    components={{
                      a: ({ href, children }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="underline text-blue-300 hover:text-blue-200">
                          {children}
                        </a>
                      ),
                      strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                      ul: ({ children }) => <ul className="list-disc list-inside space-y-1 mt-1">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal list-inside space-y-1 mt-1">{children}</ol>,
                      p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                ) : (
                  msg.content
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-white/10 px-4 py-3 rounded-xl rounded-bl-sm flex gap-1 items-center">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-white/50"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </motion.div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-3 py-3 border-t border-white/10 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about Aqil..."
          className="
            flex-1 bg-white/10 text-white text-sm
            placeholder:text-white/30
            rounded-xl px-3 py-2 outline-none
            border border-white/10 focus:border-blue-500/50
            transition
          "
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || loading}
          className="
            w-9 h-9 rounded-xl
            bg-blue-600 hover:bg-blue-500
            disabled:opacity-40 disabled:cursor-not-allowed
            flex items-center justify-center
            text-white transition
            shrink-0
          "
        >
          <Send size={15} />
        </button>
      </div>
    </motion.div>
  );
}
