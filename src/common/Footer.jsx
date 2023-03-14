import {
    InstagramOutlined, FacebookOutlined, YoutubeOutlined, TwitterOutlined
} from "@ant-design/icons";
import { Link, Route, Routes } from 'react-router-dom';
import Login from "../components/Login";

const Footer = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
            <Link to={'/Login'}><a>로그인</a></Link>
            <Link to={'/Notice'}><a>공지사항</a></Link>
            <Link to={'/Service'}><a>고객센터</a></Link>
            <span><InstagramOutlined /></span>
            <span><FacebookOutlined /></span>
            <span><YoutubeOutlined /></span>
            <span><TwitterOutlined /></span>
        </>
    )
}

export default Footer;