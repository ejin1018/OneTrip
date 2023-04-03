import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../components/config/constants";

export function useGet(initType) {
  const [data, setData] = useState([]);
  useEffect(() => {
    let url = `${API_URL}/${initType}`;
    axios
      .get(url)
      .then((result) => {
        const data = result.data;
        setData(data);
      })
      .catch((error) => {
        console.log({initType},error);
      });
  }, []);

  return { data };
}
