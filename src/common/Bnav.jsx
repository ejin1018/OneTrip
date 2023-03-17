import {HomeOutlined,CalendarOutlined,UserOutlined,HeartOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Bnav.scss"

const Bnav = () => {
return (
    <div class="bottom-nav">
       <Link to={'/'} className="bottom-nav-btn">
            <HomeOutlined />
            <p class="icontext">홈</p>
        </Link>
       <Link to={'/Schedule'} className="bottom-nav-btn">
            <CalendarOutlined />
            <p class="icontext">일정</p>
        </Link>
       <Link to={'/Mypage'} className="bottom-nav-btn">
            <UserOutlined />
            <p class="icontext">마이페이지</p>
        </Link>
       <Link to={'/Like'} className="bottom-nav-btn">
            <HeartOutlined />
            <p class="icontext">찜</p>
        </Link>
    </div>
)
}

export default Bnav;