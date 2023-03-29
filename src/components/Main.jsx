import React, { useState, useEffect } from "react";
import { LikeOutlined, EyeOutlined, EnvironmentOutlined, SwapOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { API_URL } from "./config/constants";
import axios from "axios";
import { Link } from "react-router-dom";
import RecomSlider1 from "./RecomSlider1";
import SpecialsSlider from "./SpecialsSlider";
import Country from './Country';
import ReviewBlock from './ReviewBlock';
import "./Main.scss";
import "./compStyle/mediascreen.scss";

// const tripTheme = [
//   "🛍️ 쇼핑하고 ",
//   "🍽️ 맛있는걸 먹고 ",
//   "🖼 문화 생활을 즐기고 ",
//   "🏄‍♂️ 액티비티를 즐기고 ",
//   "🌿 조용히 휴식하고 ",
// ]

const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let url = `${API_URL}/product`;
    axios.get(url).then((result) => {
      // console.log(result);
      const products = result.data.product;
      setProducts(products);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <>
      <div className="main">
        <h3 className="section-title"><span>혼자</span>라서<br />충분한 여행</h3>
        <Link className="main-card" to={'/'}>
          <div className="main-card-title">
            <EnvironmentOutlined /><span className="main-card-now">지금 떠나보세요!</span>
          </div>
          <div className="main-card-travel">
            <div className="main-card-left">
              <div className="main-info">
                <p className="main-info-where">서울</p>
                <p className="main-info-when">4월 4일 (화)<br />05:00</p>
              </div>
              <SwapOutlined className="main-icon-switch" />
              <div className="main-info">
                <p className="main-info-where">푸켓</p>
                <p className="main-info-when">4월 10일 (월)<br />18:00</p>
              </div>
            </div>
            <div className="main-card-right">
              최저<span>594,000</span>원
            </div>
          </div>
        </Link>
      </div>

      <div className="main-contents">
        <RecomSlider1 />
        <div className="packages">
          <h3 className="section-title">원트립 최신 패키지</h3>
          <div className="package-wrap">
            {products &&
              products.map((data, idx) => {
                // console.log("data",data);
                return (
                  <div className="package-box" key={idx}>
                    {data.soldout === 1?<div className="soldout"><p>예약 마감</p></div>:null}
                    <Link className="product-link" to={`/packages/${data.id}`}>
                      <div className="info-box">
                        <div className="new-img imgfit-wrap" ><img src={`${API_URL}/${data.imageUrl}`} alt="" /></div>
                        <div className="package-infos">
                          <p className="info-title">&#91;{data.p_name}&#93;</p>
                          <p className="info-price">최저 <span>{data.price}</span> 원</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="banner">
          <img src="/images/mainbanner.png" alt="마일리지 사용하고 항공권으로 돌려받자! 2023년 03월 01일 부터 31일까지 항공 포함 패키지 결제 고객대상 배너이미지" />
        </div>

        <div className="specials">
          <h3 className="section-title">원트립 특가</h3>
          <SpecialsSlider />
        </div>

        <Country></Country>

        <ReviewBlock />

      </div>

    </>
  );
};
export default Main;
