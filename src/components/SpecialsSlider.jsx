import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "swiper/css";
import { API_URL } from "./config/constants";
import { SwapOutlined } from "@ant-design/icons";

/* const recommend = [
  {
    ImgUrl: "/images/special.png",
    start: "서울",
    end: "푸켓",
    price: 594000,
    sdate: "4월 4일 (화)",
    edate: "4월 10일 (수)",
  },
  {
    ImgUrl: "/images/special2.png",
    start: "인천",
    end: "홍콩",
    price: 10000,
    sdate: "4월 4일 (화)",
    edate: "4월 10일 (수)",
  },
  {
    ImgUrl: "/images/special.png",
    start: "서울",
    end: "중국",
    price: 1000000,
    sdate: "4월 4일 (화)",
    edate: "4월 10일 (수)",
  },
  {
    ImgUrl: "/images/special2.png",
    start: "부산",
    end: "제주도",
    price: 10000,
    sdate: "4월 4일 (화)",
    edate: "4월 10일 (수)",
  },
  {
    ImgUrl: "/images/special.png",
    start: "인천",
    end: "일본",
    price: 10000,
    sdate: "4월 4일 (화)",
    edate: "4월 10일 (수)",
  },
];
 */
const SpecialsSlider = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let url = `${API_URL}/productdate`;
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
  return (
    <Swiper className="specials-wrap" spaceBetween={20} slidesPerView={2.3}>
      {products.map((value, idx) => {
          return (
            <SwiperSlide className="specials-box">
              {/* <div className="soldout">예약마감</div> */}
              <img src={`${API_URL}/${value.imageUrl}`} alt="" className="specials-img" />
              <div className="specials-text">
                <div className="specials-area">
                  <p className="specials-where">
                    {value.departure}
                    <span>
                      <SwapOutlined />
                    </span>
                    {value.redeparture}
                  </p>
                  <p className="specials-price">최저 <span>{value.price} 원</span></p>
                </div>
                <div className="specials-date">
                  <p>{value.p_sdate}</p>
                  <p>{value.p_edate}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default SpecialsSlider;
