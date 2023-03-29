import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import '../components/Main.scss';

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
  getItem('국내여행지', 'sub1', null, [
      getItem(null, 'g1', null, [
          getItem('서울', '1'),
          getItem('경기', '2'),
          getItem('강원', '3'),
          getItem('충청', '4'),
          getItem('전라', '5'),
          getItem('경상', '6'),
          getItem('제주', '7')
      ], 'group'),
  ]),
  getItem('해외여행지', 'sub2', null, [
    getItem(null, 'g2', null,[
      getItem('동아시아', '8'),
      getItem('동남아시아', '9'),
      getItem('서유럽', '10'),
      getItem('동유럽', '11'),
      getItem('아메리카', '12'),
      getItem('라틴아메리카', '13'),
      getItem('휴양지', '14')
    ],'group')
  ]),
  // getItem(null, 'sub3', null, [
  //   getItem('검색', '15'), 
  //   getItem('리뷰', '16'), 
  //   getItem('찜', '17')
  // ], 'group')
];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

const HeaderPc = () => {
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