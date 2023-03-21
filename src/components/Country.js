import React from 'react';
import { Link } from 'react-router-dom';
import "./Main.scss";

const country = [
  {
      ImgUrl:"/images/anywhere-jeju.png",
      text:"제주"
  },
  {
      ImgUrl:"/images/anywhere-gangwon.png",
      text:"강원"
  },
  {
      ImgUrl:"/images/anywhere-busan.png",
      text:"경상"
  },
  {
      ImgUrl:"/images/anywhere-jeonju.png",
      text:"전라"
  },
  {
      ImgUrl:"/images/anywhere-singapore.png",
      text:"동남아시아"
  },
  {
      ImgUrl:"/images/anywhere-paris.png",
      text:"유럽"
  },
  {
      ImgUrl:"/images/anywhere-america.png",
      text:"아메리카"
  },
  {
      ImgUrl:"/images/anywhere-vacation.png",
      text:"휴양지"
  },
] 


function Country(){
  return(
      <div className="countrys">
        <h3 className="section-title">어디든, 원트립</h3>
          <div className="country-wrap">
            {country &&
              country.map((value, idx) => {
                const countryBack = {background:`no-repeat center bottom /cover url(${country[idx].ImgUrl})`}
                return (
                  <Link className="country" to={"/"}>
                    <div className='country-img' style={countryBack}></div>
                    <p>{country[idx].text}</p>
                  </Link>
                );
              })
            }
        </div>
      </div>
  )
}

export default Country;