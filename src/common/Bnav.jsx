import React from "react";
import {HomeOutlined,UserOutlined,HeartOutlined,SearchOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Bnav = () => {

    return (
        <div className="bottom-nav">
        <Link to={'/'} className="bottom-nav-btn">
                <HomeOutlined />
                <p className="icontext">홈</p>
            </Link>
        <Link to={'/searchpage'} className="bottom-nav-btn">
                <SearchOutlined />
                <p className="icontext">검색</p>
            </Link>
        <Link to={'/review'} className="bottom-nav-btn">
                <UserOutlined />
                <p className="icontext">리뷰</p>
            </Link>
        <Link to={'/Like'} className="bottom-nav-btn">
                <HeartOutlined />
                <p className="icontext">찜</p>
            </Link>
        </div>
    )
}

export default Bnav;