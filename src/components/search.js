import React, { useEffect, useState } from "react";

import axios from "axios";
import { API_URL } from "./config/constants";

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
        console.log(el.theme);
        return el.theme;
      })
    ),
  ];
  const AllItem = [
    "모두",
    ...new Set(
      products.map((el) => {
        console.log(el.theme);
        return el.theme;
      })
    ),
  ];
  const [datas, setDatas] = React.useState(products);
  const filterItem = (catItem) => {
    if (catItem === "모두") {
      setDatas(products);
      return;
    }
    const updateItems = products.filter((el) => {
        console.log(el);
      return el.theme == catItem;
    });
   
    setDatas(updateItems);
    console.log(datas,products);
  };
  return (
    <div style={{height:500}}>
      <div id="body">
        <h1>Search</h1>
        <select onChange={(e) => filterItem(e.target.value)}>
          {AllCat.map((el, idx) => {
            return (
              <option key={el.id} value={el}>
                {el}
              </option>
            );
          })}
        </select>
        {datas.map((item, key) => (
           
          <div key={key}>{<h3>{item}</h3>}</div>
        ))}
      </div>
    </div>
  );
};
export default Search;
