"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";
import { SITE_URL } from "@/constant/seo";
import { cn } from "@/lib/utils";

const MCP_URL = `${SITE_URL}/api/mcp`;

const MCP_CONFIG = `{
  "mcpServers": {
    "aqil-portfolio": {
      "url": "${MCP_URL}"
    }
  }
}`;

export function McpServer() {
  const t = useTranslations("AboutPage.mcpServer");
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(MCP_CONFIG);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; nothing to fall back to.
    }
  }

  return (
    <div className="relative z-10 w-full flex justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-2/3 flex flex-col gap-4"
      >
        <h2 className="text-white text-2xl font-bold">{t("title")}</h2>
        <p className="text-white/70 text-sm leading-relaxed">{t("description")}</p>

        <div
          className={cn(
            "bg-white/10 backdrop-blur-xl border border-white/20",
            "rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
            "flex flex-col gap-3",
          )}
        >
          <div className="flex flex-col gap-1">
            <span className="text-white/50 text-xs uppercase tracking-wide">
              {t("endpointLabel")}
            </span>
            <code className="text-white text-sm break-all">{MCP_URL}</code>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-xs uppercase tracking-wide">
                {t("configLabel")}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-white/70 hover:text-white text-xs border border-white/20 rounded-lg px-2 py-1 transition"
              >
                {copied ? t("copied") : t("copy")}
              </button>
            </div>
            <pre className="bg-black/30 rounded-xl p-3 text-white/80 text-xs overflow-x-auto">
              <code>{MCP_CONFIG}</code>
            </pre>
          </div>

          <p className="text-white/50 text-xs leading-relaxed">{t("note")}</p>
        </div>
      </motion.div>
    </div>
  );
}
