import React from "react";
import "./ReviewBlock.scss"

export default function ReviewBlock(){
  return(
    <div className="review-wrap">
      <div className="review-container">
        <img src="./images/anywhere-jeju.png" alt=""></img>
        <div className="review-mark">
          <p className="review-mark-year">2023</p>
          <p className="review-mark-month">3월</p>
        </div>
        <div className="review-text">
          <h2 className="review-fix">이달의 리뷰</h2>
          <h3 className="review-title">봄 힐링 먹방 여행</h3>
          <p className="review-text">봄 힐링으로 먹방 여행을 다녀왔습니다</p>
          <p className="user">김공주</p>
        </div>
      </div>
    </div>
  )
}