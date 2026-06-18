"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { testimonials } from "../utils/data";

import "swiper/css";
import "swiper/css/pagination";

const borderColors: Record<string, string> = {
  blue: "hover:border-blue-600",
  yellow: "hover:border-yellow-500",
  rose: "hover:border-rose-500",
  cyan: "hover:border-cyan-400",
};

const quoteColors: Record<string, string> = {
  blue: "group-hover:text-blue-600",
  yellow: "group-hover:text-yellow-500",
  rose: "group-hover:text-rose-500",
  cyan: "group-hover:text-cyan-400",
};

const TestimonialSwiper = () => {
  return (
    <div className="testimonial_swiper_wrapper">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        className="pb-10"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={`
              group
              bg-white
              rounded-[24px]
              p-5
              flex
              flex-col
              shadow-2xl
              border-b-4
              border-transparent
              transition-all
              duration-300
              ${borderColors[item.color]}
              ${item.rotate}
            `}
            >
              <div className="flex-grow">
                <span
                  className={`
                  text-6xl
                  text-gray-800
                  font-serif
                  leading-none
                  h-6
                  block
                  transition-colors
                  duration-300
                  ${quoteColors[item.color]}
                `}
                >
                  “
                </span>

                <p className="text-gray-700 text-md mt-3 mb-6">{item.review}</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>

                <span className="text-gray-500 text-xs">{item.location}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSwiper;
