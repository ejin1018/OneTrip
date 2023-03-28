import {HomeOutlined,UserOutlined,HeartOutlined,SearchOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Bnav.scss"

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
       <Link to={'/Mypage'} className="bottom-nav-btn">
            <UserOutlined />
            <p className="icontext">마이페이지</p>
        </Link>
       <Link to={'/Like'} className="bottom-nav-btn">
            <HeartOutlined />
            <p className="icontext">찜</p>
        </Link>
    </div>
)
}

export default Bnav;