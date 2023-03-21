import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const recommend = [
  {
    ImgUrl: "/images/countrys1.png",
    title:"코타키나발루 7일 #하얏트 #5박 이상",
    price: 10000,
  },
  {
    ImgUrl: "/images/countrys2.png",
    title: "오키나와 2일 #온천 #1박 이상",
    price: 10000,
  },
  {
    ImgUrl: "/images/countrys3.png",
    title: "혜주마음속 2일 #온천 #1박 이상",
    price: 100,
  },
  {
    ImgUrl: "/images/countrys1.png",
    title: "혜주마음속 2일 #온천 #1박 이상",
    price: 100,
  },
];

const RecomSlider = () => {
  return (
    <Swiper className="recom-wrap" spaceBetween={20} slidesPerView={2.5} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
      {recommend &&
        recommend.map((value, idx) => {
          const recomBack = {background:`no-repeat center/cover url(${recommend[idx].ImgUrl})`}
          return (
            <SwiperSlide className="recom-box">
              <div className="recom-img" style={recomBack}></div>
              <div className="info-box">
                <p className="info-title">{recommend[idx].title}</p>
                <p className="info-price"><span>{recommend[idx].price}</span> 원 ~</p>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default RecomSlider;
