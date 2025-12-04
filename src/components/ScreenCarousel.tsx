"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

type ScreenCarouselProps = {
  screenshots: string[];
  appName: string;
};

export default function ScreenCarousel({
  screenshots,
  appName,
}: ScreenCarouselProps) {
  if (!screenshots || screenshots.length === 0) {
    return (
      <div className="h-56 rounded-2xl bg-slate-900/70" />
    );
  }

  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={"auto"}
      className="!pb-2"
    >
      {screenshots.map((src) => (
        <SwiperSlide
          key={src}
          className="!w-[220px] sm:!w-[260px]"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
            <Image
              src={src}
              alt={`${appName} screenshot`}
              width={520}
              height={1040}
              className="h-[260px] w-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
