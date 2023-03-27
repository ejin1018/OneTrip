import React,{useEffect,useState} from 'react';
import axios from "axios";
import { Input } from 'antd';
import Country from './Country';
import { API_URL } from "./config/constants";
import './SearchPage.scss';

const { Search } = Input;

function SearchPage(){
  const [trip, setTrip] = useState([]);

  const getPackage = () => {
    axios
      .get(`${API_URL}/products`)
      .then((result) => {
        console.log('get')
        setTrip(result.data.product);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  function showPackage(){
    console.log(trip)
    const resultHere = document.querySelector('.search-result');
    trip.forEach((item)=>{
      resultHere.innerHTML += `
        <div class='search-box'>
          <a href="/packages/${item.id}" class='search-box-inner'>

            <div class='package-img'>
              <p class='package-img-theme'>${item.theme}</p>
              <img src=${API_URL}/${item.imageUrl} alt=${item.p_name}/>
            </div>
            <div class='package-info'>
              <p class='package-where'>[${item.p_area}]</p>
              <p class='package-title'>${item.p_name}</p>
              <p class='package-hotel'>${item.hotel}</p>
              <p class='package-date'>${item.p_sdate} ~ ${item.p_edate}</p>
            </div>

          </a>
        </div>
      `;
    })
  }

  function searchPackage(e){
    let keywords = e.target.value;
    let boxes = document.querySelectorAll('.search-box');
    let country = document.querySelector('.countrys');
    country.style.display = 'none';
    boxes.forEach((box)=>{
      const where = box.querySelector('.package-where').innerText;
      const title = box.querySelector('.package-title').innerText;
      if(where.indexOf(keywords) > -1 || title.indexOf(keywords) > -1){
        box.style.display = 'block';
      }else{
        box.style.display = 'none';
      }
    })
  }
  
  useEffect(()=>{
    getPackage();
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('input',searchPackage);
  },[]);
  useEffect(()=>{
    showPackage();
  })

  return(
    <div className='search-wrap'>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        className='search-bar'
      />
      <Country />
      <div className='search-result'>
      </div>
    </div>
  )
}

export default SearchPage;