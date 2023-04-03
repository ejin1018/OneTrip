import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import useWidth from "../hook/useWidth";

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
    getItem(<Link to={"/productt/서울"}>서울</Link>, "1"),
    getItem(<Link to={"/productt/경기"}>경기</Link>, "2"),
    getItem(<Link to={"/productt/강원"}>강원</Link>, "3"),
    getItem(<Link to={"/productt/충청"}>충청</Link>, "4"),
    getItem(<Link to={"/productt/전라"}>전라</Link>, "5"),
    getItem(<Link to={"/productt/경상"}>경상</Link>, "6"),
    getItem(<Link to={"/productt/제주"}>제주</Link>, "7"),
  ]),
  getItem("해외여행지", "sub2", null, [
    getItem(<Link to={"/productt/동아시아"}>동아시아</Link>, "8"),
    getItem(<Link to={"/productt/동남아시아"}>동남아시아</Link>, "9"),
    getItem(<Link to={"/productt/서유럽"}>서유럽</Link>, "10"),
    getItem(<Link to={"/productt/동유럽"}>동유럽</Link>, "11"),
    getItem(<Link to={"/productt/북아메리카"}>북아메리카</Link>, "12"),
    getItem(<Link to={"/productt/남아메리카"}>남아메리카</Link>, "13"),
    getItem(<Link to={"/productt/휴양지"}>휴양지</Link>, "14"),
  ]),
];
const rootSubmenuKeys = ["sub1", "sub2"];

const Header = () => {
  const width = useWidth();
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const [open, setOpen] = useState(false);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  // drawer
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const goTop = ()=>{
    window.scrollTo(0,0)
  }

  return (
    <>
      {width <= 768 ? (
        <div className="header">
          <div className="header-inner">
            <h1 className="logo">
              <Link to="/" onClick={goTop}>OneTrip</Link>
            </h1>
            {/* drawer */}
            <div className="header-drawer">
              <Button type="primary" onClick={showDrawer}>
                <MenuOutlined />
              </Button>
              <Drawer placement="right" onClose={onClose} open={open} className="drawer-menu">
                <Menu onOpenChange={onOpenChange} onClick={onClose} className="sider-menu" mode="inline" items={items} />

                <ul className="sider-bottom-menu">
                  <li>
                    <Link to="/Login" onClick={onClose}>
                      로그인
                    </Link>
                  </li>
                  <li>
                    <Link to="/create" onClick={goTop} onClick={onClose}>
                      관광상품업로드
                    </Link>
                  </li>
                  <li>
                    <Link to="/review" onClick={onClose}>
                      리뷰
                    </Link>
                  </li>
                  <li>
                    <Link onClick={onClose}>이벤트</Link>
                  </li>
                  <li>
                    <Link onClick={onClose}>고객센터</Link>
                  </li>
                </ul>
              </Drawer>
            </div>
          </div>
        </div>
      ) : (
        <div className="headerPc">
          <div className="headerPc-utility">
            <ul className="headerPc-utility-list">
              <li>
                <Link to={"/Login"}>로그인</Link>
              </li>
              <li>
                <Link to={"/"}>이벤트</Link>
              </li>
              <li>
                <Link to={"/"}>고객센터</Link>
              </li>
            </ul>
          </div>
          <div className="headerPc-nav">
            <Link to={"/"} className="headerPc-logo">
              OneTrip
            </Link>
            <Menu onOpenChange={onOpenChange} className="headerPc-menu" mode="inline" items={items} />
            <ul className="headerPc-otherMenu">
              <li>
                <Link to={"/searchpage"} className="otherMenu-btn">
                  검색
                </Link>
              </li>
              <li>
                <Link to={"/review"} className="otherMenu-btn">
                  리뷰
                </Link>
              </li>
              <li>
                <Link to={"/likepage"} className="otherMenu-btn">
                  찜
                </Link>
              </li>
              <li>
                <Link to={"/create"} className="otherMenu-btn">
                  상품 업로드
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
