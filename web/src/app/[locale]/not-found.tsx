"use client";

import { useTranslations } from "next-intl";
import Lottie from "lottie-react";
import animation from "./404.json";
import Link from "next/link";
import { FancyButton } from "@/components/atoms/FancyButton";
import { cn } from "@/lib/utils";
import { fontCinzel } from "@/constant/fonts";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 py-20">
      {/* Lottie Animation */}
      <div className="w-full max-w-xs mb-8">
        <Lottie animationData={animation} loop autoplay />
      </div>

      {/* Title */}
      <h1 className={cn(fontCinzel.className,"text-white text-2xl font-semibold mb-2")}>{t("title")}</h1>

      {/* Description */}
      <p className="text-white/70 max-w-md mb-6">{t("description")}</p>

      {/* CTA Button */}
      <Link href="/">
        <FancyButton>{t("backHome")}</FancyButton>
      </Link>
    </div>
  );
}
