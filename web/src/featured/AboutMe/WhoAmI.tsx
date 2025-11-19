import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { WhoAmIItem } from "@/@types/About";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FancyButton } from "@/components/atoms/FancyButton";

import { motion } from "motion/react";

const items: WhoAmIItem[] = [
  {
    content:
      "Full Stack Developer with experience in web application development using JavaScript, TypeScript, React, Node.js, and databases (SQL, NoSQL). Proficient in digital administration systems and accustomed to working with ERP and data management. Capable of developing applications from frontend to backend to improve business efficiency. ",
    title: "About Me",
    subTitle: "About AS",
    imageAlt: "Image 1",
    imageSrc: "/Certificates/fsd-fewd.jpg",
    CtaButton: <FancyButton>OK</FancyButton>,
  },
  {
    content: "Halo nama saya Aqil",
    title: "Tentang Saya2",
    subTitle: "About AS",
    imageAlt: "Image 1",
    imageSrc: "/Certificates/fsd-fewd.jpg",
  },
];

export function WhoAmI() {
  return (
    <motion.div
      initial={{
        width: 40,
        height: 40,
        borderRadius: 9999,
        opacity: 0,
        scale: 0.5,
        backgroundColor: "#8ab4d2",
        x: "50%", // center-ish morph
        translateX: "-50%",
      }}
      animate={{
        width: "100%", // same as w-2/3
        height: 400,
        borderRadius: 20,
        opacity: 1,
        scale: 1,
        backgroundColor: "rgba(255,255,255,0)", // fully remove
        x: 0,
        translateX: "0%",
      }}
      transition={{
        duration: 0.65,
        ease: "easeOut",
        delay: 2.2
      }}
      className="mx-auto rounded-2xl overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
      >
        <Swiper
          direction="vertical"
          pagination={{ clickable: true }}
          modules={[Pagination]}
          slidesPerView={1}
          className="mx-auto h-[400px] w-2/3 rounded-2xl"
        >
          {items.map((item, i) => (
            // Pakek grid! karena bawaannya block
            <SwiperSlide key={item.title} className="px-20">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 relative grid grid-cols-2 py-8 rounded-2xl">
                <div className="relative w-[300px] h-[300px] -left-10 overflow-hidden rounded-2xl shadow-2xl shadow-black">
                  <div className="absolute inset-0 bg-linear-to-tl from-[#122a3b] to-[#85beea] opacity-80 z-10" />
                  <Image
                    fill
                    alt={item.imageAlt}
                    src={item.imageSrc}
                    priority={i === 0}
                    className="object-cover"
                  />
                </div>
                <div className={cn("space-y-2 pr-12")}>
                  <p className="font-semibold text-sm text-white">
                    {item.title}
                  </p>
                  <p className="font-bold text-xl text-white">
                    {item.subTitle}
                  </p>
                  <article className="text-white text-justify">
                    {item.content}
                  </article>

                  {item.CtaButton}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <style>{`
  .swiper-pagination {
    right: 100px !important;
  }
 .swiper-pagination-bullet-active {
  background: #1B3C53 !important;
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
