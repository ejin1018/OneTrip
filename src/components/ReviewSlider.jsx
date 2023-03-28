import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "swiper/css";
import { API_URL } from "./config/constants";
import { Link } from "react-router-dom";

const ReviewSlider = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    let url = `${API_URL}/review`;
    axios
      .get(url)
      .then((result) => {
        const review = result.data.review;
        setReview(review);
        console.log(review);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Swiper spaceBetween={20} slidesPerView={2.3}>
      {review.map((data, idx) => {
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
