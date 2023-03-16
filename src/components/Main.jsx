import { LikeOutlined, EyeOutlined } from "@ant-design/icons";
import { Select } from "antd";
import "./Main.scss";
import RecomSlider from "./RecomSlider";
import SpecialsSlider from "./SpecialsSlider";

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
    ImgUrl: "/images/countrys1.png",
    destination: "코타키나발루 7일",
    tag: "#하얏트 #5박 이상",
    price: 10000,
  },
  {
    ImgUrl: "/images/countrys1.png",
    destination: "오키나와 2일",
    tag: "#온천 #1박 이상",
    price: 10000,
  },
  {
    ImgUrl: "/images/countrys1.png",
    destination: "혜주마음속 2일",
    tag: "#온천 #1박 이상",
    price: 100,
  },
  {
    ImgUrl: "/images/countrys1.png",
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
        <h3><span>혼자</span>라서 <br/>충분한 여행</h3>
      </div>

      <div className="select">
        <h2>나는 요즘</h2>
        <Select 
          defaultValue="하고싶어요"
          /* bordered={false} */
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

      <div className="recommends">
        <h3>님을 위한 추천 여행</h3>
        <RecomSlider />
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
        <img src="/images/mainbanner.png" alt="마일리지 사용하고 항공권으로 돌려받자! 2023년 03월 01일 부터 31일까지 항공 포함 패키지 결제 고객대상 배너이미지" />
      </div>

      <div className="specials">
        <h3>원트립 특가</h3>
        <SpecialsSlider />
      </div>

      <div className="countrys">
      <h3>국가별</h3>
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

      <div className="review">
        <h3>혼자라서 더 좋은, 원트립 후기</h3>
        <div className="review-wrap">
            <div className="review-user">
                <div className="user">
                    <img src="/images/main.png" alt="" />
                    <p>사용자이름</p>
                </div>
                <div className="good">
                    <p><span><LikeOutlined /></span>60</p>
                    <p><span><EyeOutlined /></span>756+</p>
                </div>
            </div>
            <div className="review-img">
                <img src="/images/review.png" alt="" />
            </div>
            <div className="review-text">
                <p className="title">나홀로 유유자적 바다와 물회</p>
                <p>[특가] 제주도 3박 4일 월정리</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Main;
