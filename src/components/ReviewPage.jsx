import React from "react";
import { API_URL } from "./config/constants";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./sass/ReviewPage.scss";
import { useGet } from "../hook/useGet";

dayjs.extend(relativeTime);

function ReviewPage() {
  const { data } = useGet("reviews");
  const review = data.review;

  return (
    <div className="reviewPage">
      <h3>원트립 리뷰</h3>
      <div className="reviewPage-wrap">
        {review &&
          review.map((data, idx) => {
            return (
              <div className="reviewPage-box" key={idx}>
                <img src={`${API_URL}/${data.r_imageUrl}`} alt="" />
                <div className="reviewPage-mark">
                  <p className="reviewPage-mark-year">{dayjs(data.createdAt).format("YYYY")}</p>
                  <p className="reviewPage-mark-month">{dayjs(data.createdAt).format("MM-DD")}</p>
                </div>
                <div className="reviewPage-info">
                  <h2 className="reviewPage-fix pointFont">
                    &ldquo;
                    <br />
                    {data.r_title}
                  </h2>
                  <p className="reviewPage-text">{data.r_text}</p>
                  <p className="reviewPage-user">
                    작성자 <span>{data.user_name}</span>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <Link to={"/reviewcreate"}>
        <Button size="large">리뷰작성하기</Button>
      </Link>
    </div>
  );
}

export default ReviewPage;
