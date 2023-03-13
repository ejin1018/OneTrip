import { SearchOutlined } from "@ant-design/icons";
import { MenuOutlined } from "@ant-design/icons/lib/icons";
import "./Header.scss"

const Header = () => {
    return (
        <>
            <div className="header">
                <h1>Logo</h1>
                <div className="header-icon">
                    <span className="search-icon"><SearchOutlined /></span>
                    <span className="menu-icon"><MenuOutlined /></span>
                </div>
            </div>
        </>
    )
}

export default Header;