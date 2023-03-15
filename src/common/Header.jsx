import React from 'react';
import { SearchOutlined,MenuOutlined } from "@ant-design/icons";
import { Link, Route, Routes } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import Login from "../components/Login";
import SideMenu from '../components/SideMenu';
import "./Header.scss"

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
        getItem('서울', '1'), getItem('경기', '2'),
        getItem('강원', '3'), getItem('충청', '4'),
        getItem('전라', '5'), getItem('경상', '6'),
        getItem('제주', '7')
    ], 'group'),
    ]),
    getItem('해외여행지', 'sub2', null, [
      getItem('동아시아', '8'),
      getItem('동남아시아', '9'),
      getItem('서유럽', '10'),
      getItem('동유럽', '11'),
      getItem('아메리카', '12'),
      getItem('라틴아메리카', '13'),
      getItem('휴양지', '14'),
    ]),
    getItem(null, 'grp', null, [getItem('이벤트', '15'), getItem('리뷰', '16'), getItem('마이페이지', '17'), getItem('고객센터', '18')], 'group'),
  ];

const { Sider } = Layout;
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-inner">
                    <h1 className="logo">
                        <Link to='/'>OneTrip</Link>
                    </h1>
                    <div className="header-icon">
                        <Button className="search-icon" icon={<SearchOutlined />} />
                        <Button className="menu-icon" icon={<MenuOutlined />} />
                    </div>
                </div>
                <Layout className='sider-wrap'>
                    <Sider
                        className='sider-container'
                        breakpoint="xxl"
                        collapsedWidth="0"
                        reverseArrow="true"
                    >
                        <div className='sider-top-menu'>
                            <Link to='/Login'>로그인</Link>
                            <Link to='/Signin'>회원가입</Link>
                            <Routes>
                            <Route path='/login' element={<Login />}></Route>
                            </Routes>
                        </div>
                        <Menu
                            className='sider-menu'
                            defaultSelectedKeys={['1']}
                            mode="inline"
                            items={items}
                        />
                    </Sider>
                </Layout>
            </div>
        </>
    )
}

export default Header;