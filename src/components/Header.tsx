import "../styles/Header/Header.css";
import logo from "../assets/dashboard-logo.png";
import image from "../assets/profile-picture.png";
import { MdOutlineSearch, MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo-image">
          <img src={logo} alt="lendsqr logo" onClick={() => navigate("/")} />
        </div>
        <div className="search-container">
          <div className="search-input">
            <input type="text" placeholder="Search for anything" />
          </div>
          <div className="green-search-icon">
            <MdOutlineSearch color="white" size={"1rem"} />
          </div>
        </div>
      </div>
      <div className="right-section">
        <p className="docs">Docs</p>
        <div className="icon">
          <IoIosNotificationsOutline size={"1.5rem"} color={"#213f7d"} />
        </div>
        <div>
          <img className="profile-image" src={image} alt="" />
        </div>
        <div className="action-btn">
          <p className="username">Ayodeji</p>
          <div className="drop">
            <MdOutlineArrowDropDown size={"1.2rem"} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
