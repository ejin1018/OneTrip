import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { API_URL } from "./config/constants";
import { useGet } from "../hook/useGet";

const ReviewSlider = () => {
  const { data } = useGet("review");
  const review = data.review;

  return (
    <Swiper spaceBetween={20} slidesPerView={2.3}>
      {review &&
        review.map((data, idx) => {
          return (
            <SwiperSlide key={idx}>
              {data.r_area}
              <img src={`${API_URL}/${data.r_imageUrl}`} alt="" />
              {data.r_text}
              {data.r_title}
              {data.user_name}
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default ReviewSlider;
