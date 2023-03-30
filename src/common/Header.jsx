import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
// import "./Header.scss"

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("국내여행지", "sub1", null, [
    getItem(
      null,
      "g1",
      null,
      [
        getItem(<Link to={"/productt/서울"}>서울</Link>, "1"),
        getItem(<Link to={"/productt/경기"}>경기</Link>, "2"),
        getItem(<Link to={"/productt/강원"}>강원</Link>, "3"),
        getItem(<Link to={"/productt/충청"}>충청</Link>, "4"),
        getItem(<Link to={"/productt/전라"}>전라</Link>, "5"),
        getItem(<Link to={"/productt/경상"}>경상</Link>, "6"),
        getItem(<Link to={"/productt/제주"}>제주</Link>, "7"),
      ],
      "group"
    ),
  ]),
  getItem("해외여행지", "sub2", null, [
    getItem(<Link to={"/productt/동아시아"}>동아시아</Link>, "8"),
    getItem(<Link to={"/productt/동남아시아"}>동남아시아</Link>, "9"),
    getItem(<Link to={"/productt/서유럽"}>서유럽</Link>, "10"),
    getItem(<Link to={"/productt/동유럽"}>동유럽</Link>, "11"),
    getItem(<Link to={"/productt/아메리카"}>아메리카</Link>, "12"),
    getItem(<Link to={"/productt/라틴아메리카"}>라틴아메리카</Link>, "13"),
    getItem(<Link to={"/productt/휴양지"}>휴양지</Link>, "14"),
  ]),
  getItem(null, "grp", null, [getItem("검색", "15"), getItem("리뷰", "16"), getItem("찜", "17")], "group"),
];
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const { Sider } = Layout;
const Header = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <>
      <div className="header">
        <div className="header-inner">
          <h1 className="logo">
            <Link to="/">OneTrip</Link>
          </h1>
        </div>
        <Layout className="sider-wrap">
          <Sider className="sider-container" breakpoint="xxl" collapsedWidth="0" reverseArrow="true" trigger={<MenuOutlined />}>
            <div className="sider-top-menu">
              <Link to="/Login">로그인</Link>
            </div>
            <Menu openKeys={openKeys} onOpenChange={onOpenChange} className="sider-menu" defaultSelectedKeys={["1"]} mode="inline" items={items} />
            <ul className="sider-bottom-menu">
              <li>
                <Link to="/create">관광상품업로드</Link>
              </li>
              <li>
                <Link to="/review">리뷰</Link>
              </li>
              <li>
                <Link>이벤트</Link>
              </li>
              <li>
                <Link>고객센터</Link>
              </li>
            </ul>
          </Sider>
        </Layout>
      </div>
    </>
  );
};

export default Header;
