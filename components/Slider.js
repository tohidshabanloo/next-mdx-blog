import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import Post from "./Post";
import Link from "next/link";
import New from "./New";

const defaultOptions = {
  spaceBetween: 0,
  slidesPerView: 4.3,
};

const Slider = ({ posts, option = defaultOptions }) => {
  return (
    <div className="swiperContainer">
      <Swiper
        spaceBetween={option.spaceBetween}
        slidesPerView={option.slidesPerView}
        pagination={{ clickable: true }}
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
