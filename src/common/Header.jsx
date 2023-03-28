import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MenuOutlined } from "@ant-design/icons";
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
        getItem('동아시아', '8'),
        getItem('동남아시아', '9'),
        getItem('서유럽', '10'),
        getItem('동유럽', '11'),
        getItem('아메리카', '12'),
        getItem('라틴아메리카', '13'),
        getItem('휴양지', '14'),
    ]),
    // getItem(null, 'grp', null, [getItem('이벤트', '15'), getItem('리뷰', '16'), getItem('마이페이지', '17'), getItem('고객센터', '18')], 'group'),
];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const { Sider } = Layout;
const Header = () => {

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
        <>
            <div className="header">
                <div className="header-inner">
                    <h1 className="logo">
                        <Link to='/'>OneTrip</Link>
                    </h1>
                </div>
                <Layout className='sider-wrap'>
                    <Sider
                        className='sider-container'
                        breakpoint="xxl"
                        collapsedWidth="0"
                        reverseArrow="true"
                        trigger={<MenuOutlined />}
                    >
                        <div className='sider-top-menu'>
                            <Link to='/Login'>로그인</Link>
                        </div>

                        <Menu
                            openKeys={openKeys}
                            onOpenChange={onOpenChange}
                            className='sider-menu'
                            defaultSelectedKeys={['1']}
                            mode="inline"
                            items={items}
                        />
                        <ul className='sider-bottom-menu'>
                            <li>
                                <Link to='/create'>관광상품업로드</Link>
                            </li>
                            <li>
                                <Link>이벤트</Link>
                            </li>
                            <li>
                                <Link>리뷰</Link>
                            </li>
                            <li>
                                <Link>마이페이지</Link>
                            </li>
                            <li>
                                <Link>고객센터</Link>
                            </li>
                        </ul>
                    </Sider>
                </Layout>
            </div>
        </>
    )
}

export default Header;