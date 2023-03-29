import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./config/constants";
import "./ReviewPage.scss";

function ReviewPage() {
  const [review, setReview] = useState([]);

  useEffect(() => {
    let url = `${API_URL}/review`;
    console.log(review);
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
    <div className="review-wrap">
      <div className="review-box">
        {review.map((data, idx) => {
          return (
            <>
              {data.r_area}
              <img src={`${API_URL}/${data.r_imageUrl}`} alt="" />
              {data.r_text}
              {data.r_title}
              {data.user_name}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ReviewPage;
