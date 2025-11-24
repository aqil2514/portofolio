"use client";

import { FancyButton } from "@/components/atoms/FancyButton";
import { useContactContext } from "./provider";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export function FormMessage() {
  const { via, setVia } = useContactContext();
  const t = useTranslations("Contact");
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  function handleSend() {
    const message = messageRef.current?.value || "";

    if (!message.trim()) {
      alert(t("form.alertEmpty"));
      return;
    }

    if (via === "email") {
      const mailto = `mailto:muhamadaqil383@gmail.com?subject=Contact%20From%20Website&body=${encodeURIComponent(
        message
      )}`;
      window.location.href = mailto;
      return;
    }

    if (via === "whatsapp") {
      const phone = "6285693273746";
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
      return;
    }
  }

  return (
    <div className="w-full px-6 py-10 text-white space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row justify-between items-center">
        <h2 className="text-xl font-semibold tracking-wide">
          {t("form.title", { via: via === "email" ? "Email" : "WhatsApp" })}
        </h2>

        {/* Switch Button */}
        <FancyButton
          onClick={() => setVia(via === "email" ? "whatsapp" : "email")}
        >
          {t("form.switchVia", { via: via === "email" ? "WhatsApp" : "Email" })}
        </FancyButton>
      </div>

      {/* Textarea Message */}
      <div className="flex flex-col gap-2">
        <label className="text-sm opacity-80">{t("form.messageLabel")}</label>
        <textarea
          ref={messageRef}
          placeholder={t("form.placeholder")}
          className="
            w-full h-40 p-4 rounded-xl
            bg-white/10 backdrop-blur
            border border-white/20
            outline-none
            text-white
            resize-none
          "
        />
      </div>

      <FancyButton onClick={handleSend}>{t("form.send")}</FancyButton>
    </div>
  );
}
