import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { API_URL } from "../components/config/constants";
import axios from "axios";
import '../sass/Header.scss';


const HeaderPc = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let url = `${API_URL}/products`;
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
  function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
  }
  // console.log(products,"fdafafad")
  const items = [
    getItem('국내여행지', 'sub1', null, [
      getItem(null, 'g1', null, [
            getItem(<Link to={`/productt/${products.p_area}`}>{products.p_area}</Link>, '1'),
            getItem(<Link to={'/productt/경기'}>경기</Link>, '2'),
            getItem(<Link to={'/productt/강원'}>강원</Link>, '3'),
            getItem(<Link to={'/productt/충청'}>충청</Link>, '4'),
            getItem(<Link to={'/productt/전라'}>전라</Link>, '5'),
            getItem(<Link to={'/productt/경상'}>경상</Link>, '6'),
            getItem(<Link to={'/productt/제주'}>제주</Link>, '7')
        ], 'group'),
    ]),
    getItem('해외여행지', 'sub2', null, [
      getItem(null, 'g2', null,[
        getItem(<Link to={'/productt/동아시아'}>동아시아</Link>, '8'),
        getItem(<Link to={'/productt/동남아시아'}>동남아시아</Link>, '9'),
        getItem(<Link to={'/productt/서유럽'}>서유럽</Link>, '10'),
        getItem(<Link to={'/productt/동유럽'}>동유럽</Link>, '11'),
        getItem(<Link to={'/productt/아메리카'}>아메리카</Link>, '12'),
        getItem(<Link to={'/productt/라틴아메리카'}>라틴아메리카</Link>, '13'),
        getItem(<Link to={'/productt/휴양지'}>휴양지</Link>, '14')
      ],'group')
    ]),
    // getItem(null, 'sub3', null, [
    //   getItem('검색', '15'), 
    //   getItem('리뷰', '16'), 
    //   getItem('찜', '17')
    // ], 'group')
  ];
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
  
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
  };
  return (
    <div className='headerPc'>
      <div className='headerPc-utility'>
        <ul className='headerPc-utility-list'>
          <li>
            <Link to={'/Login'}>로그인</Link>
          </li>
          <li>
            <Link to={'/'}>이벤트</Link>
          </li>
          <li>
            <Link to={'/'}>고객센터</Link>
          </li>
        </ul>
      </div>
      <div className='headerPc-nav'>
        <Link to={'/'} className='headerPc-logo'>OneTrip</Link>
        <Menu
          onOpenChange={onOpenChange}
          className='headerPc-menu'
          mode="inline"
          items={items}
        />
        <ul className='headerPc-otherMenu'>
          <li>
            <Link to={'/searchpage'} className="otherMenu-btn">검색</Link>
          </li>
          <li>
            <Link to={'/reviewpage'} className="otherMenu-btn">리뷰</Link>
          </li>
          <li>
            <Link to={'/likepage'} className="otherMenu-btn">찜</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderPc;