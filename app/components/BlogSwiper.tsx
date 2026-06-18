"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import BlogCard from "./BlogCard";
import { blogs } from "../utils/data";

import "swiper/css";
import "swiper/css/pagination";

const BlogSwiper = () => {
  return (
    <div className="blog_swiper_wrapper">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1.1}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          567: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        className="pb-12"
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <BlogCard {...blog} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSwiper;
