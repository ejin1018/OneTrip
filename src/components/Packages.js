import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "./Packages.scss";

function Packages(){
  return(
    <div className='check-package-wrap'>
      <div className='packimg'>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          modules={[Pagination]}
          className="packimg-swiper"
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </div>
      <div className='packinfo'>
        <div className='packinfo-title'>
          <p className='packinfo-title-area'>[국가명]!</p>
          <p className='packinfo-title-name'>패키지명</p>
        </div>
        <div className='packinfo-theme'>휴식</div>
        <div className='packinfo-airline'>
          <div className='packinfo-airline-box'>
            <p className='airline-state'>출발</p>
            <p className='airline-date'>03.19 (일)</p>
            <p className='airline-time'>19:45</p>
            <p className='airline-trans'>제주항공</p>
          </div>
          <ArrowRightOutlined className='packinfo-airline-arrow' />
          <div className='packinfo-airline-box'>
            <p className='airline-state'>도착</p>
            <p className='airline-date'>03.19 (일)</p>
            <p className='airline-time'>19:45</p>
            <p className='airline-trans'>제주항공</p>
          </div>
        </div>
        <div className='packinfo-total'>
          <p className='total-text'>상품 가격</p>
          <p className='total-price'><span>754650</span> 원</p>
        </div>
        <Button type='primary' className='package-payment'>결제하기</Button>
      </div>
    </div>
  )
}

export default Packages;