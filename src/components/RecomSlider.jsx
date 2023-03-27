import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { API_URL } from "./config/constants";
import "swiper/css";

/* const recommend = [
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
]; */

const RecomSlider = () => {

  const [products, setProducts] = useState([]);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  useEffect(() => {
    let url = `${API_URL}/producttheme`;
    axios.get(url).then((result) => {
      console.log(result);
      const products = result.data.product;
      setProducts(products);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  
  return (
    <Swiper className="recom-wrap" spaceBetween={20} slidesPerView={2.5} >
      {products &&
        products.map((data, idx) => {
          return (
            <SwiperSlide className="recom-box">
              <div className="imgfit-wrap recom-img">
                <img src={`${API_URL}/${data.imageUrl}`} alt="" />
              </div>
              <div className="info-box">
                <p className="info-title">{data.p_name}</p>
                <p className="info-price"><span>{data.price}</span> 원 ~</p>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default RecomSlider;
