"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef, useEffect } from "react";

import whatsApp from "./lottie/whatsapp.json";
import email from "./lottie/mail.json";

interface HoverLottieProps {
  animationData: object;
  onClick: () => void;
}

function HoverLottie({ animationData, onClick }: HoverLottieProps) {
  const ref = useRef<LottieRefCurrentProps | null>(null);

  // ▶️ Play sekali saat komponen pertama kali muncul
  useEffect(() => {
    ref.current?.play();
  }, []);

  function handleEnter() {
    // Jalankan ulang dari frame 0
    ref.current?.goToAndPlay(0, true);
  }

  function handleLeave() {
  const lastFrame = ref.current?.getDuration(true);

  if (lastFrame !== undefined) {
    ref.current?.goToAndStop(lastFrame, true);
  }
}

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="cursor-pointer"
    >
      <Lottie
        lottieRef={ref}
        animationData={animationData}
        loop={false}
        autoplay={false}
        className="w-32 h-32"
      />
    </button>
  );
}

export function ToggleMessage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function setType(type: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("type", type);

    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <HoverLottie
        animationData={email}
        onClick={() => setType("email")}
      />

      <HoverLottie
        animationData={whatsApp}
        onClick={() => setType("whatsapp")}
      />
    </div>
  );
}
