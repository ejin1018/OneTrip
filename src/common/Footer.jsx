import {
    InstagramOutlined, FacebookOutlined, YoutubeOutlined,TwitterOutlined, SearchOutlined} from "@ant-design/icons";
    import { Button } from 'antd';
import { Link } from "react-router-dom";
import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <hr/>
            <div className="footer-top">
                <Link to={'/Login'}>로그인</Link>
                <Link to={'/Notice'}>공지사항</Link>
                <Link to={'/Service'}>고객센터</Link>
            </div>
            <br/>
            <div className="footer-sns">
                <Button type="primary" shape="circle" icon={<FacebookOutlined />} />
                <Button type="primary" shape="circle" icon={<InstagramOutlined />} />
                <Button type="primary" shape="circle" icon={<YoutubeOutlined />} />
                <Button type="primary" shape="circle" icon={<TwitterOutlined />} />
            </div>
            
            <br/>
            <div className="footer-info">
                <p>
                    <span>여행정보</span>
                    <span>·</span> 
                    <span>이용약관</span>
                    <span>·</span> 
                    <span className="boldtext">개인정보처리방침</span>
                    
                </p>
                {/* <p>
                    <a href="#">여행정보</a>
                    ·
                    <a href="#">이용약관</a>
                    ·
                    <a href="#">
                        <span className="boldtext">개인정보처리방침</span>
                    </a>
                </p> */}
                <p>
                    <span className="boldtext">(팀)트래블메이커</span>
                    <br/>
                    <span>김민정 김영중 김인혜 정이진</span>
                </p>
                <p>
                    <span>
                        Copyright 2023. all rights reserved at (팀)트래블메이커
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Footer;