import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { API_URL } from "./config/constants";
import "swiper/css";
const RecomSlider1 = () => {
  const [products, setProducts] = useState([]);
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
  // const [products, setProducts] = useState([]);
  const [items, setItems] = React.useState(products);

  console.log(items);
  if(items.length==0){return};

  // console.log(items);
  // if(products==null){return}
  // console.log(products);
  const filterItem = (catItem) => {
    // console.log(catItem);
    if (catItem === "아무거나") {
      setItems(products);
      return;
    }
    const updateItems = products.filter((el) => {
      // console.log(el);
      return el.theme === catItem;
    });
    setItems(updateItems);
  };

  return (
    <div className="nowadays" /* style={{ marginTop: 300 }} */>
      <div className="select">
        <h2>나는 요즘</h2>
        <select
          onChange={(e) => filterItem(e.target.value)}
          className="font-bold uppercase"
        >
          {CatValues.map((el, index) => {
            // console.log(curCat);
            return (
              <option
                key={el.id}
                value={el} /*  defaultValue={curCat[0]} */
              >
                {el}
              </option>
            );
          })}
        </select>
        <p className="select-want">하고 싶어요</p>
      </div>
      <div className="recommends">
        <h3 className="section-title">님을 위한 추천 여행</h3>
        <Swiper className="recom-wrap" spaceBetween={20} slidesPerView={2.5}>
          {items.map((data, idx) => (
              <SwiperSlide className="recom-box" key={idx}>
                <div className="imgfit-wrap recom-img">
                  <img src={`${API_URL}/${data?.imageUrl}`} alt="" />
                </div>
                <div className="info-box">
                  <p className="info-title">
                    {data?.p_name} / <span>{data?.theme}</span>
                  </p>
                  <p className="info-price">
                    <span>{data?.price}</span> 원 ~
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
export default RecomSlider1;
