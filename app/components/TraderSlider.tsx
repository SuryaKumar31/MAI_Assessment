"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

import { traders } from "../utils/data";

const TraderSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(5);

  return (
    <div className="trader_swiper_wrapper">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        centeredSlides
        speed={500}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        onBreakpoint={(swiper) => {
          setSlidesCount(Number(swiper.params.slidesPerView));
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
            centeredSlides: false,
          },
        }}
      >
        {traders.map((trader, index) => {
          const middleIndex =
            slidesCount === 1
              ? activeIndex
              : slidesCount === 3
                ? activeIndex + 1
                : activeIndex + 2;

          const distance = Math.abs(index - middleIndex);

          let translateY = 0;

          if (slidesCount === 3) {
            if (distance === 1) translateY = 50;
          }

          if (slidesCount === 5) {
            if (distance === 1) translateY = 50;
            if (distance === 2) translateY = 90;
          }

          return (
            <SwiperSlide key={trader.id}>
              <div
                style={{
                  transform: `translateY(${translateY}px)`,
                  transition: "transform .5s ease",
                }}
                className="
                  relative
                  w-full
                  h-[350px]
                  lg:h-[380px]
                  rounded-2xl
                  overflow-hidden
                  shadow
                  hover:shadow-lg
                "
              >
                <h4 className="w-full h-full flex items-center justify-center bg-gray-300 text-4xl font-bold text-[#003f6b]">
                  {trader.initials}
                </h4>

                <div className="absolute bottom-0 w-full py-5 bg-gradient-to-b from-transparent via-[#003F6B60] to-[#003F6B] text-center text-white">
                  <p className="text-lg font-semibold">{trader.name}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-5 mt-10">
        <button className="custom-prev bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
          <ChevronLeft size={26} className="text-[#004A7C]" />
        </button>

        <button className="custom-next bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
          <ChevronRight size={26} className="text-[#004A7C]" />
        </button>
      </div>

      <div className="text-center mt-6">
        <button className="px-8 py-2 bg-[#1F5CAC] text-white shadow-md font-medium text-[14px] cursor-pointer rounded-full">
          View All Traders
        </button>
      </div>
    </div>
  );
};

export default TraderSlider;
