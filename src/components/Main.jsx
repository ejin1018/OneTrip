import { Select } from "antd";
import "./Main.scss";

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

const recommend = [
  {
    ImgUrl: "/images/main.png",
    destination: "코타키나발루 7일",
    tag: "#하얏트 #5박 이상",
    price: 10000,
  },
  {
    ImgUrl: "/images/main.png",
    destination: "오키나와 2일",
    tag: "#온천 #1박 이상",
    price: 10000,
  },
  {
    ImgUrl: "/images/main.png",
    destination: "혜주마음속 2일",
    tag: "#온천 #1박 이상",
    price: 100,
  },
  {
    ImgUrl: "/images/main.png",
    destination: "혜주마음속 2일",
    tag: "#온천 #1박 이상",
    price: 100,
  },
];

const Main = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div className="main">
        <img src="/images/main.png" alt="" />
      </div>
      <div className="select">
        <h2>나는 요즘</h2>
        <Select
          defaultValue="하고싶어요"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "쇼핑하고싶어요",
              label: "쇼핑하고싶어요",
            },
            {
              value: "휴식하고싶어요",
              label: "휴식하고싶어요",
            },
            {
              value: "맛있는걸 먹고싶어요",
              label: "맛있는걸 먹고싶어요",
            },
          ]}
        />
      </div>
      {/* 슬라이더...... */}
      <div className="recommends">
        <h3>님을 위한 추천 여행</h3>
        <div className="recom-wrap">
          {recommend &&
            recommend.map((value, idx) => {
              return (
                <div className="recom-box">
                  <img src={recommend[idx].ImgUrl} alt="" />
                  <div>
                    <p>{recommend[idx].destination}</p>
                    <p>{recommend[idx].price}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="packages">
        <h3>원트립 패키지</h3>
        <div className="package-wrap">
          {recommend &&
            recommend.map((value, idx) => {
              return (
                <div className="package-box">
                  <img src={recommend[idx].ImgUrl} alt="" />
                  <div>
                    <p>{recommend[idx].destination}</p>
                    <p>{recommend[idx].price}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="banner">
        <img src="" alt="" />
      </div>

      {/* 슬라이드...... */}
      <div className="specials"></div>

      <div className="countrys">
        <div className="country-wrap">
          {country &&
            country.map((value, idx) => {
              return (
                <div className="country">
                  <img src={country[idx].ImgUrl} alt="" />
                  <p>{country[idx].text}</p>
                </div>
              );
            })}
        </div>
      </div>

      <div className="review"></div>
    </>
  );
};

export default Main;
