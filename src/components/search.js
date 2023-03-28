import React, { useEffect, useState } from "react";

import axios from "axios";
import { API_URL } from "./config/constants";

import { Input, Select } from "antd";
const Search = () => {
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
  const AllCat = [
    "모두",
    ...new Set(
      products.map((el) => {
        return el.theme;
      })
    ),
  ];
  
  //if(products==null){return}
 console.log(products);
  return (
    <select>
      <option />
    </select>
  );
};
export default Search;
