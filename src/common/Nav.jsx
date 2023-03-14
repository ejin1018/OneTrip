import {HomeOutlined,CalendarOutlined,UserOutlined,HeartOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Nav.scss"

const Nav = () => {
return (
    <div class="nav">
       <div class="nav-icons"><Link to={'/Home'}><a><HomeOutlined /><br/><span class="icontext">홈</span></a></Link></div>
       <div class="nav-icons"><Link to={'/Schedule'}><a><CalendarOutlined /><br/><span class="icontext">일정</span></a></Link></div>
       <div class="nav-icons"><Link to={'/Mypage'}><a><UserOutlined /><br/><span class="icontext">마이페이지</span></a></Link></div>
       <div class="nav-icons"><Link to={'/Like'}><a><HeartOutlined /><br/><span class="icontext">찜</span></a></Link></div>
        
    </div>
)
}

export default Nav;