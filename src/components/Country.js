import React from 'react';
const country = [
  {
      ImgUrl:"/images/main.png",
      text:"한국"
  },
  {
      ImgUrl:"/images/main.png",
      text:"호주"
  },
  {
      ImgUrl:"/images/main.png",
      text:"영국"
  },
  {
      ImgUrl:"/images/main.png",
      text:"독일"
  },
  {
      ImgUrl:"/images/main.png",
      text:"일본"
  },
  {
      ImgUrl:"/images/main.png",
      text:"대만"
  },
  {
      ImgUrl:"/images/main.png",
      text:"베트남"
  },
  {
      ImgUrl:"/images/main.png",
      text:"스위스"
  },
] 
function Country(){
  return(
      <div className="countrys">
        <h3 className="section-title">국가별</h3>
          <div className="country-wrap">
            {country &&
              country.map((value, idx) => {
                return (
                 <div className="country">
                    <img src={country[idx].ImgUrl} alt="" />
                    <p>{country[idx].text}</p>
                  </div>
                );
              })
            }
        </div>
      </div>
  )
}

export default Country;