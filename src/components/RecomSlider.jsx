import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const recommend = [
  {
    ImgUrl: "/images/countrys2.png",
    destination: "코타키나발루 7일",
    tag: "#하얏트 #5박 이상",
    price: 10000,
  },
  {
    ImgUrl: "/images/countrys2.png",
    destination: "오키나와 2일",
    tag: "#온천 #1박 이상",
    price: 10000,
  },
  {
    ImgUrl: "/images/countrys2.png",
    destination: "혜주마음속 2일",
    tag: "#온천 #1박 이상",
    price: 100,
  },
  {
    ImgUrl: "/images/countrys2.png",
    destination: "혜주마음속 2일",
    tag: "#온천 #1박 이상",
    price: 100,
  },
];

const RecomSlider = () => {
  return (
    <Swiper className="recom-wrap" spaceBetween={50} slidesPerView={3} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
      {recommend &&
        recommend.map((value, idx) => {
          return (
            <SwiperSlide className="recom-box">
              <img src={recommend[idx].ImgUrl} alt="" />
              <div>
                <p>{recommend[idx].destination}</p>
                <p>{recommend[idx].tag}</p>
                <p>{recommend[idx].price}</p>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default RecomSlider;
