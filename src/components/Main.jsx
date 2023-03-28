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
        <div className="main-dim-pc"></div>
        <h3 className="section-title"><span>혼자</span>라서<br />충분한 여행</h3>
        
        <Link className="main-card" to={'/'}>
          <div className="main-card-title">
            <EnvironmentOutlined /><span className="main-card-now">지금 떠나보세요!</span>
          </div>
          <div className="main-card-pc">
            <img src="/images/special.png" alt=""/>
          </div>
          
          <div className="main-card-travel">
            <div className="main-card-left">
              <div className="main-info">
                <p className="main-info-where">인천</p>
                <p className="main-info-trans">아시아나항공</p>
                <p className="main-info-when">2023-03-19<br />05:00</p>
              </div>
              <SwapOutlined className="main-icon-switch" />
              <div className="main-info">
                <p className="main-info-where">홍콩</p>
                <p className="main-info-trans">아시아나항공</p>
                <p className="main-info-when">2023-03-26<br />18:00</p>
              </div>
            </div>
            <div className="main-card-right">
              최저<span>628,530</span>원
            </div>
          </div>
        </Link>
      </div>

      <div className="main-contents">
        <RecomSlider1 />

        <div className="specials">
          <h3 className="section-title specials-title-mb">원트립 특가</h3>
          <div className="specials-pc">
            <h3 className="section-title specials-title-pc">원트립에서<br/><span className="boldText">특가</span>로 즐기는<br/>혼자만의<br/>낭만</h3>
          </div>
          <SpecialsSlider />
        </div>
        
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
                          <p className="info-country">{data.p_country}</p>
                          <p className="info-title">&#91;{data.p_name}&#93;</p>
                          <p className="info-price"><span>{data.price}</span> 원</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="themeTrip">
          <div className="themeTrip-left"></div>
          <div className="themeTrip-right">
            <p className="themeTrip-slogan">내가 원하는 여행</p>
            <p className="themeTrip-logo">One Trip</p>
            <div className="themeTrip-sort">
              <p className="themeTrip-sort-title">원트립에서 제안하는 다섯가지 테마에 따라 여행을 떠나보세요</p>
              <p className="themeTrip-sort-text">#문화생활 - 문화, 예술 속으로 떠나는 여행</p>
              <p className="themeTrip-sort-text">#맛집탐방 - 입이 즐거운 행복한 여행</p>
              <p className="themeTrip-sort-text">#액티비티 - 지루한 일상을 잊을 수 있는 유쾌한 여행</p>
              <p className="themeTrip-sort-text">#휴식 - 지친 일상에서 잠시 멀어져 충전을 위한 여행</p>
              <p className="themeTrip-sort-text">#쇼핑 - 나를 위한 보상, 양손 가득한 여행</p>
              {products &&products.map((data)=>{
                console.log(data)
              })}
            </div>
          </div>
        </div>

        <div className="banner">
          <img src="/images/mainbanner.png" alt="마일리지 사용하고 항공권으로 돌려받자! 2023년 03월 01일 부터 31일까지 항공 포함 패키지 결제 고객대상 배너이미지" />
        </div>

        <Country></Country>

        <ReviewBlock />

      </div>

    </>
  );
};
export default Main;
