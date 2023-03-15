import { SearchOutlined,MenuOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import SideMenu from '../components/SideMenu';
import "./Header.scss"

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
                <SideMenu></SideMenu>
            </div>
        </>
    )
}

export default Header;