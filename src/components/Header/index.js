import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPagelines } from "react-icons/fa6";
import "./index.css";

const Header = () => {
  return (
    <div className="bg-nav">
      <div className="top-nav">
        <p className="tn-para">Free Shopping on orders above 999/-</p>
        <p className="tn-para">Call us on: +91 98768 05120</p>
      </div>
      <div className="tabs-logo-cont">
        <div className="logo-cont">
          <img
            className="logo-img"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1729269843/image_55_ob4t2d.svg"
            alt="logo"
          />
          <h1 className="logo-head">Chaperone</h1>
        </div>
        <button className="menu-btn">
          <CiMenuBurger className="menu-icon" />
        </button>
        <ul className="tabs-ul">
          <li className="tab-li">Home</li>
          <li className="tab-li tab-li-active">Plants & Pots</li>
          <li className="tab-li">
            Tools
            <RiArrowDropDownLine />
          </li>
          <li className="tab-li">
            Our Services
            <RiArrowDropDownLine />
          </li>
          <li className="tab-li">Blog</li>
          <li className="tab-li">Our Story</li>
          <li className="tab-li">FAQs</li>
        </ul>
        <div className="profile-cart-cont">
          <div className="profile-cont">
            <CiUser className="profile-img" />
            <p className="profile-para">My Profile</p>
          </div>
          <div className="cart-cont">
            <p className="count-para">3</p>
            <FiShoppingCart className="profile-img" />
            <p className="profile-para">Cart</p>
          </div>
        </div>
      </div>
      <div className="search-cont">
        <div className="search-input-cont">
          <button className="search-btn">
            <CiSearch className="search-icon" />
          </button>
          <input
            className="search-input"
            type="search"
            placeholder="Search Plant"
          />
          <FaPagelines className="search-icon" />
        </div>
      </div>
    </div>
  );
};
export default Header;
