import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { API_URL } from "./config/constants";
import { Link } from "react-router-dom";
import "swiper/css";

const theme = ["모두", "쇼핑", "음식", "문화생활", "액티비티", "휴식"];

const RecomSlider = () => {
  const [products, setProducts] = useState([]);
  const [theme0, setTheme] = useState("모두");
  const [theme1, setTheme1] = useState([]);
  useEffect(() => {
    let url = `${API_URL}/producttheme`;
    axios
      .get(url)
      .then((result) => {
        const products = result.data.product;
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const CatValues = [
    "아무거나",
    ...new Set(
      products.map((curElem) => {
        return curElem.theme;
      })
    ),
  ];

  const [items, setItems] = useState(products);

      if (theme.theme == value) {
        if (theme.theme == "모두") {
          setProducts(products);
        }
        // console.log(theme0,"theme0 여기봐라");
        const theme0 = theme.theme;
        setTheme(theme0);
        return setTheme;
      }
  return (
    <div className="main-contents" style={{ marginTop: 300 }}>
      <div className="select">
        <h2>나는 요즘</h2>
        <select
          onChange={(event) => filterItem(event.target.value)}
          className="font-bold uppercase"
        >
          {CatValues.map((curCat, index) => {
            return (
              <option key={curCat.index} value={curCat} defaultValue={curCat[0]}>
                {curCat}
              </option>
            );
          })}
        </select>
        <p className="select-want">하고 싶어요</p>
      </div>

      <div className="recommends">
        <h3 className="section-title">님을 위한 추천 여행</h3>
        <Swiper className="recom-wrap" spaceBetween={20} slidesPerView={2.5}>
          {items &&
            items.map((data, idx) => (
              <SwiperSlide className="recom-box" key={idx}>
                 {data.soldout === 1?<div className="soldout">예약 마감</div>:null}
                  <Link className="product-link" to={`/packages/${data.id}`}>
                <div className="imgfit-wrap recom-img">
                  <img src={`${API_URL}/${data.imageUrl}`} alt="" />
                </div>
                <div className="info-box">
                  <p className="info-title">
                    {data.p_name} / <span>{data.theme}</span>
                  </p>
                  <p className="info-price">
                    <span>{data.price}</span> 원 ~
                  </p>
                </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecomSlider;
