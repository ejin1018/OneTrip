import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "./config/constants";
//import "./ProductPage.css";
import "./Productt.css";

function PareaPage() {
  const navigate = useNavigate();
  const { p_area } = useParams();
  const [product, setProduct] = useState(null);

  const getParea = () => {
    axios
      .get(`${API_URL}/productt/${p_area}`)
      .then((result) => {
        console.log(result);
        setProduct(result.data.product);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getParea();
  }, []);
  if (product == null) {
    return <h1>상품정보를 받고 있습니다.</h1>;
  }
  return (
    <div className="packages">
      <h3 className="section-title">원트립 지역별 패키지</h3>
      <div className="package-wrap">
        {product.map((data, idx) => {
            console.log("data",data);
            return (
              <div className="package-box" key={idx}>
                {data.soldout === 1 ? (
                  <div className="soldout">예약 마감</div>
                ) : null}
                <Link className="product-link" to={`/packages/${data.id}`}>
                  <div className="info-box">
                    <div className="new-img imgfit-wrap">
                      <img src={`${API_URL}/${data.imageUrl}`} alt="" />
                    </div>
                    <p className="info-title">{data.p_name}</p>
                    <p className="info-price">
                      <span>{data.price}</span> 원 ~
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default PareaPage;
