import React from "react";
import "./ReviewBlock.scss"

export default function ReviewBlock(){
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
          <h3 className="review-title">봄 힐링 먹방 여행</h3>
          <p className="review-text">봄 바람이 불기 시작하는 3월,<br />3월의 여행 소식을 들어보세요</p>
          <p className="review-user">작성자 <span>김공주</span></p>
        </div>
      </div>
    </div>
  )
}