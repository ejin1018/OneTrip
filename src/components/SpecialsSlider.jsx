import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SwapOutlined } from "@ant-design/icons";

const recommend = [
  {
    ImgUrl: "/images/special.png",
    start: "서울",
    end: "푸켓",
    price: 594000,
    sdate: "4월 4일 (화)",
    edate: "4월 10일 (수)",
  },
  {
    ImgUrl: "/images/special.png",
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
    ImgUrl: "/images/special.png",
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

const SpecialsSlider = () => {
  return (
    <Swiper className="specials-wrap" spaceBetween={50} slidesPerView={3} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
      {recommend &&
        recommend.map((value, idx) => {
          return (
            <SwiperSlide className="specials-box">
              <img src={recommend[idx].ImgUrl} alt="관광여행지 이미지" />
              <div className="specials-text">
                <div className="specials-area">
                  <p className="f16">
                    {recommend[idx].start}
                    <span>
                      <SwapOutlined />
                    </span>
                    {recommend[idx].end}
                  </p>
                  <p>최저 <span className="f14">{recommend[idx].price} 원</span></p>
                </div>
                <div className="specials-date">
                  <p>{recommend[idx].sdate}</p>
                  <p>{recommend[idx].edate}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default SpecialsSlider;
