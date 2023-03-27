import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { Select } from "antd";
import { API_URL } from "./config/constants";
import "swiper/css";

const theme = [
  "쇼핑",
  "음식",
  "문화생활",
  "액티비티",
  "휴식",
]

const RecomSlider = () => {

  const [products, setProducts] = useState([]);
  const [theme0, setTheme] = useState([]);
  function handleChange(value){
    console.log(`selected ${value}`);
    let result = products.filter((theme,idx)=>{
      // console.log("V",theme,"idx",idx);
      if(theme.theme==value){
        // console.log(theme0,"theme0 여기봐라");
        const theme0 = theme;
        setTheme(theme0)
        return true;
      }
    });
    for(let i=0; i<result.length; i++){
      console.log(result);
      
    }
  };
  console.log(theme0,"ㅁㄻㄹ");
  useEffect(() => {
    let url = `${API_URL}/producttheme`;
    axios.get(url).then((result) => {
      const products = result.data.product;
      setProducts(products);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  
  return (
    <div className="main-contents">
    <div className="select">
      <h2>나는 요즘</h2>
      <Select
        defaultValue={theme[0]}
        /* bordered={false} */
        onChange={handleChange}
        options={theme.map((theme, idx) => ({
          key: idx,
          label: theme,
          value: theme,
        }))}
      />
      <p className="select-want">싶어요</p>
    </div>

    <div className="recommends">
      <h3 className="section-title">님을 위한 추천 여행</h3>
          
    <Swiper className="recom-wrap" spaceBetween={20} slidesPerView={2.5} >
      {products.map((data, idx) => {
          return (
            <SwiperSlide className="recom-box">
              <div className="imgfit-wrap recom-img">
                <img src={`${API_URL}/${theme0.imageUrl}`} alt="" />
              </div>
              <div className="info-box">
                <p className="info-title">{theme0.p_name} / <span>{theme0.theme}</span></p>
                <p className="info-price"><span>{theme0.price}</span> 원 ~</p>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
    </div>
    </div>
  );
};

export default RecomSlider;
