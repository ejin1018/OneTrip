import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "./config/constants";
import "./ReviewBlock.scss"

export default function ReviewBlock(){
  const [review, setReview] = useState([]);


  useEffect(() => {
    let url = `${API_URL}/review`;
    // console.log(review);
    axios
      .get(url)
      .then((result) => {
        const review = result.data.review;
        setReview(review);
        // console.log(review);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return(
    <div className="review-wrap">
      <div className="review-container">
        <img src="./images/review.png" alt=""></img>
        <div className="review-mark">
          <p className="review-mark-year">2023</p>
          <p className="review-mark-month">3월</p>
        </div>
        <div className="review-info">
          <h2 className="review-fix pointFont">&ldquo;<br/>이달의 리뷰</h2>
          {/* <h3 className="review-title">{review[0].r_title}</h3>
          <p className="review-text">{review[0].r_text}</p>
          <p className="review-user">작성자 <span>{review[0].user_name}</span></p> */}
        </div>
      </div>
    </div>
  )
}