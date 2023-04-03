import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "./sass/ReviewBlock.scss";
import { useGet } from "../hook/useGet";

export default function ReviewBlock() {
  const { data } = useGet("review");
  const review = data.review;

  return (
    <div className="review-wrap">
      <Link to={"/review"} className="review-container">
        <img src="./images/review.png" alt=""></img>
        <div className="review-mark">
          <p className="review-mark-year">{dayjs(review.createdAt).format("YYYY")}</p>
          <p className="review-mark-month">{dayjs(review.createdAt).format("M")}월</p>
        </div>
        <div className="review-info">
          <h2 className="review-fix pointFont">
            &ldquo;
            <br />
            이달의 리뷰
          </h2>
          {review && review[0] && (
            <>
              <h3 className="review-title">{review[0].r_title}</h3>
              <p className="review-text">{review[0].r_text}</p>
              <p className="review-user">
                작성자 <span>{review[0].user_name}</span>
              </p>
            </>
          )}
        </div>
      </Link>
    </div>
  );
}
