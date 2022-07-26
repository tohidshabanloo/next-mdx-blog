import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import Post from "./Post";
import Link from "next/link";
import New from "./New";

// const defaultOptions = {
//   spaceBetween: 0,
//   slidesPerView: 4.3,
// };

const NewSlider = ({ news }) => {
  return (
    <div className="swiperContainer">
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1.5,
            spaceBetween: 0,
          },
          500: {
            slidesPerView: 2.5,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3.5,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 0,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {" "}
        <div className="posts">
          {news.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`}>
              <SwiperSlide>
                <New key={index} post={post} />
              </SwiperSlide>
            </Link>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default NewSlider;
