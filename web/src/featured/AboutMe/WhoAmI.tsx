"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useAboutMeContext } from "./provider";
import { getInternationalizationValue } from "@/utils/getInternationalizationValue";
import { useLocale } from "next-intl";
import { WhoAmIButton } from "./WhoAmIButton";

export function WhoAmI() {
  const { data } = useAboutMeContext();
  const locale = useLocale();
  return (
    <motion.div
      initial={{
        width: 40,
        height: 40,
        borderRadius: 9999,
        opacity: 0,
        scale: 0.5,
        backgroundColor: "#8ab4d2",
        x: "50%",
        translateX: "-50%",
      }}
      animate={{
        width: "100%",
        height: "auto",
        borderRadius: 20,
        opacity: 1,
        scale: 1,
        backgroundColor: "rgba(255,255,255,0)",
        x: 0,
        translateX: "0%",
      }}
      transition={{
        duration: 0.65,
        ease: "easeOut",
        delay: 2.2,
      }}
      className="mx-auto rounded-2xl overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
      >
        <Swiper
          direction="horizontal"
          autoHeight={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            768: {
              direction: "vertical", // desktop / tablet
              autoHeight: false, // harus false di vertical
              height: 420, // fixed height
            },
          }}
          slidesPerView={1}
          className="mx-auto md:h-[420px] w-full sm:w-4/5 lg:w-2/3 rounded-2xl px-4 sm:px-0 bg-white/10 backdrop-blur-lg border border-white/20 md:bg-transparent md:backdrop-blur-none"
        >
          {data.whoAmI.map((item, i) => (
            <SwiperSlide
              key={getInternationalizationValue(item.title, locale)}
              className="px-2 sm:px-10 lg:px-20 py-4"
            >
              <div
                className="
                  bg-white/10 backdrop-blur-lg border border-white/20 
                  grid grid-cols-1 sm:grid-cols-2 
                  gap-6 sm:gap-4 
                  p-6 sm:p-8 
                  rounded-2xl
                "
              >
                {/* IMAGE */}
                <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[300px] mx-auto sm:-left-20 overflow-hidden rounded-2xl shadow-2xl shadow-black">
                  <div className="absolute inset-0 bg-linear-to-tl from-[#122a3b] to-[#85beea] opacity-80 z-10" />
                  <Image
                    fill
                    alt={item.imageAlt}
                    src={item.imageSrc}
                    priority={i === 0}
                    className="object-cover"
                  />
                </div>

                {/* TEXT */}
                <div
                  className={cn(
                    "space-y-2 sm:pr-6 lg:pr-12 text-white text-left"
                  )}
                >
                  <p className="font-semibold text-sm text-white/90">
                    {getInternationalizationValue(item.title, locale)}
                  </p>
                  <p className="font-bold text-xl text-white">
                    {getInternationalizationValue(item.subtitle, locale)}
                  </p>
                  <article className="text-white/90 text-sm sm:text-base text-justify leading-relaxed">
                    {getInternationalizationValue(item.content, locale) }
                  </article>

                  <WhoAmIButton buttonId={item.ctaButtonId} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <style>{`
        .swiper-pagination {
          right: 20px !important;
        }

        @media (min-width: 640px) {
          .swiper-pagination {
            right: 50px !important;
          }

         
        }

        @media (min-width: 1024px) {
          .swiper-pagination {
            right: 100px !important;
          }
        }

        @media (max-width:768px){
         .swiper-pagination-bullet-active{
          width: 20px;
          height: 8px !important;
          }}

        .swiper-pagination-bullet {
          background:#FFF;
          opacity: .4;
        }

        .swiper-pagination-bullet-active {
          background: #FFF !important;
          opacity: 1;
          height: 20px;
          border-radius: 20px;
          box-shadow: 
            0 0 6px rgba(27,60,83,0.7),
            0 0 12px rgba(27,60,83,0.5),
            0 0 20px rgba(27,60,83,0.35);
        }
      `}</style>
    </motion.div>
  );
}
