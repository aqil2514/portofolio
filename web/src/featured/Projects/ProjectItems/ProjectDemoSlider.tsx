"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { getInternationalizationValue } from "@/utils/getInternationalizationValue";
import { useLocale } from "next-intl";
import { SubDemoTypes } from "@/@types/Projects";

export function ProjectDemoSlider({ items }: { items: SubDemoTypes[] }) {
  const locale = useLocale();

  if (!items || items.length === 0) return null;

  return (
    <div className="max-w-3xl mx-auto my-10 px-2 sm:px-0">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          const videos = document.querySelectorAll("video");

          videos.forEach((video, i) => {
            if (i === swiper.activeIndex) {
              video.play().catch(() => {});
            } else {
              video.pause();
              video.currentTime = 0; // optional reset
            }
          });
        }}
        className="rounded-2xl overflow-hidden"
      >
        {items.map((demo, index) => (
          <SwiperSlide key={demo.title ?? index}>
            <div
              className="
                bg-white/10 backdrop-blur-xl 
                border border-white/20
                rounded-2xl p-4 sm:p-6
                space-y-4
              "
            >
              {/* VIDEO */}
              <div className="rounded-xl overflow-hidden">
                <video
                  preload={index !== 0 ? "none" : ""}
                  src={demo.videoUrl}
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full h-auto"
                />
              </div>

              {/* TITLE */}
              {demo.title && (
                <h3 className="text-white/95 text-lg font-semibold tracking-wide">
                  {demo.title}
                </h3>
              )}

              {/* DESCRIPTION */}
              {demo.description && (
                <p className="text-white/80 text-sm leading-relaxed">
                  {getInternationalizationValue(demo.description, locale)}
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CUSTOM PAGINATION STYLING */}
      <style>{`
        .swiper-pagination-bullet {
          background: #fff;
          opacity: .4;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 22px;
          border-radius: 20px;
          background: #fff;
        }
      `}</style>
    </div>
  );
}
