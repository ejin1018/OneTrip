import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dayjs from "dayjs";
import "swiper/css";
import { API_URL } from "./config/constants";
import { SwapOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useGet } from "../hook/useGet";

const SpecialsSlider = () => {
  const { data } = useGet("productdate");
  const products = data.product;

  return (
    <Swiper className="specials-wrap" spaceBetween={20} breakpoints={{ 578: { slidesPerView: 3.5 } }} slidesPerView={1.8}>
      {products &&
        products.map((value, idx) => {
          return (
            <SwiperSlide className="specials-box" key={idx}>
              {value.soldout === 1 ? <div className="soldout">예약 마감</div> : null}
              <Link className="specials-link" to={`/packages/${value.id}`}>
                <img src={`${API_URL}/${value.imageUrl}`} alt="" className="specials-img" />
                <div className="specials-text">
                  <div className="specials-area">
                    <p className="specials-where">
                      {value.start}
                      <span>
                        <SwapOutlined />
                      </span>
                      {value.end}
                    </p>
                    <p className="specials-price">
                      최저 <span>{value.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
                    </p>
                    <p className="specials-price">잔여 수량 {value.count}</p>
                  </div>
                  <div className="specials-date">
                    <p>{dayjs(value.p_sdate).format("YYYY-MM-DD")}</p>
                    <p>{dayjs(value.p_edate).format("YYYY-MM-DD")}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default SpecialsSlider;
