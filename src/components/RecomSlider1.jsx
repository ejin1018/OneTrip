import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { API_URL } from "./config/constants";
import { Link } from "react-router-dom";
import "swiper/css";

const RecomSlider1 = () => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = React.useState(products);

  useEffect(() => {
    let url = `${API_URL}/producttheme`;
    axios
      .get(url)
      .then((result) => {
        const products = result.data.product;
        setProducts(products);
        setItems(products);
      })
      .catch((error) => {
        console.log(error);
      });
    return()=>{
      setProducts(products);
    }
  }, []);
  const CatValues = [
    "아무거나",
    ...new Set(
      products.map((curElem) => {
        return curElem.theme;
      })
    ),
  ];
  const filterItem = (catItem) => {
    if (catItem === "아무거나") {
      setItems(products);
      return;
    }
    const updateItems = products.filter((el) => {
      return el.theme === catItem;
    });
    setItems(updateItems);
  };

  return(
    <div className="nowadays" /* style={{ marginTop: 300 }} */>
      <div className="select">
        <h2>나는 요즘</h2>
        <div className="select-inline">
          <select
            onChange={(e) => filterItem(e.target.value)}
            className="font-bold uppercase pointFont"
          >
            {CatValues.map((el, index) => {
              return (
                <option
                  key={el.id}
                  value={el} 
                >
                  {el}
                </option>
              );
            })}
          </select>
          <p className="select-want">하고 싶어요</p>
        </div>
      </div>
      <div className="recommends">
        <Swiper className="recom-wrap" spaceBetween={20} breakpoints={{578:{slidesPerView:2.5},769:{slidesPerView:3.5}}}>
          {items.map((data, idx) => (
              <SwiperSlide className="recom-box" key={idx}>
              {data.soldout === 1?<div className="soldout"><p>예약 마감</p></div>:null}
              <Link className="specials-link" to={`/packages/${data.id}`}>
                <div className="imgfit-wrap recom-img">
                  <img src={`${API_URL}/${data?.imageUrl}`} alt="" />
                </div>
                <div className="info-box">
                  <p className="info-theme">{data?.theme}</p>
                  <p className="info-title">
                    &#91; {data?.hotel}	&#93;{data?.p_name}
                  </p>
                  <p className="info-price">
                    <span>{data?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> 원 ~
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
export default RecomSlider1;
