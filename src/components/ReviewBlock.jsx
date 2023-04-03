import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "./sass/ReviewBlock.scss";
import { useGet } from "../hook/useGet";
import { API_URL } from "./config/constants";

export default function ReviewBlock() {
  const { data } = useGet("review");
  const review = data.review;

  return (
    <div className="review-wrap">
      {review &&
        review.map((review, idx) => {
          return (
            <Link to={"/review"} className="review-container" key={idx}>
              <img src={`${API_URL}/${review.r_imageUrl}`} alt=""></img>
              <div className="review-mark">
                <p className="review-mark-year">
                  {dayjs(review.createdAt).format("YYYY")}
                </p>
                <p className="review-mark-month">
                  {dayjs(review.createdAt).format("M")}월
                </p>
              </div>
              <div className="review-info">
                <h2 className="review-fix pointFont">
                  &ldquo;
                  <br />
                  이달의 리뷰
                </h2>
                <>
                  <h3 className="review-title">{review.r_title}</h3>
                  <p className="review-text">{review.r_text}</p>
                  <p className="review-user">
                    작성자 <span>{review.user_name}</span>
                  </p>
                </>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
