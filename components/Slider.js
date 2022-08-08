import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import Post from "./Post";
import Link from "next/link";
import "swiper/css/bundle";

const Slider = ({ posts }) => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          300: {
            slidesPerView: 1.5,
            spaceBetween: 8,
          },
          500: {
            slidesPerView: 2.5,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 3.5,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 8,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {" "}
        <div className="posts">
          {posts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`}>
              <SwiperSlide>
                <Post key={index} post={post} />
              </SwiperSlide>
            </Link>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
