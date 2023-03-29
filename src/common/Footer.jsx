import {InstagramOutlined, FacebookOutlined, YoutubeOutlined,TwitterOutlined, GithubOutlined} from "@ant-design/icons";
import { Button } from 'antd';
import { Link} from 'react-router-dom';
// import "./Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <Link to={'/Login'}>로그인</Link>
                <Link to={'/Notice'}>공지사항</Link>
                <Link to={'/Service'}>고객센터</Link>
            </div>
            <div className="footer-sns">
            <Button size="large" shape="circle" icon={<a href="https://github.com"> <GithubOutlined /> </a>} />
            <Button size="large" shape="circle" icon={<a href="https://facebook.com"> <FacebookOutlined /> </a>} />
            <Button size="large" shape="circle" icon={<a href="https://instagram.com"> <InstagramOutlined /> </a>} />
            <Button size="large" shape="circle" icon={<a href="https://youtube.com"> <YoutubeOutlined /> </a>} />
            <Button size="large" shape="circle" icon={<a href="https://twitter.com"> <TwitterOutlined /> </a>} /> 
            </div>
            <div className="footer-info">
                <div className="footer-assign">
                    <span>여행정보</span>
                    <span>&nbsp;·&nbsp;</span> 
                    <span>이용약관</span>
                    <span>&nbsp;·&nbsp;</span> 
                    <span className="boldtext">개인정보처리방침</span>
                </div>
                <div className="footer-team">
                    <p className="boldtext">㈜트래블메이커</p>
                    <p className="footer-team-member"><span>총괄책임자 </span>김인혜<br/> <span>프론트책임자 </span>김민정 정이진 <span>데이터책임자 </span>김영중</p>
                </div>
                <p className="footer-copyright">
                    Copyright 2023. all rights reserved at (팀)트래블메이커
                </p>
            </div>
        </div>
    )
}

export default Footer;