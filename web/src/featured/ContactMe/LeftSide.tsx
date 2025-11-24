"use client";
import Lottie from "lottie-react";
import leftSideData from "./lottie/left-side-ai.json";

export function LeftSide() {
  return (
    <div
      className="
        flex justify-center items-center
        w-full h-full
        py-8
      "
    >
      <Lottie
        animationData={leftSideData}
        loop={true}
        autoplay={true}
        className="
          w-full 
          max-w-[550px]     
          md:max-w-[700px]
          lg:max-w-[850px] 
          h-52
          md:h-72
          lg:h-96
        "
      />
    </div>
  );
}
