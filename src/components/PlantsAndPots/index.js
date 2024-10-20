import { Link } from "react-router-dom";
import { Popup } from "reactjs-popup";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";
import Header from "../Header";
import Footer from "../Footer";

import "./index.css";

const PlantsAndPots = () => {
  return (
    <>
      <Header />
      <div className="pp-top-nursery">
        <div className="pp-btns-cont">
          <button className="pp-plants-btn">Plants</button>
          <button className="pp-pots-btn">Pots</button>
        </div>
        <p className="pp-para">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
        <div className="pp-nursery-cont">
          <h1 className="pp-nursery-head">Nursery</h1>
          <ul className="nursery-ul">
            <li className="nursery-li">
              <img
                className="nursery-li-img"
                src="https://res.cloudinary.com/dazwjceuy/image/upload/v1729269832/Ellipse_68_nz6mg6.png"
                alt="nursery-li-img"
              />
              <p className="nursery-li-para">
                Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="filter-products-list-cont">
        <div className="filter-cont">
          <div className="filter-card">
            <div className="filter-head-cont">
              <p className="filter-para">Filter</p>
              <p className="filter-para">CLEAR ALL</p>
            </div>
            <ul className="filter-ul">
              <li className="filter-li">
                <p className="filter-para">Types of Plants</p>
                <button className="filter-btn">
                  <p className="filter-para">+</p>
                </button>
              </li>
              <li className="filter-li">
                <p className="filter-para">Price</p>
                <button className="filter-btn">
                  <p className="filter-para">+</p>
                </button>
              </li>
              <li className="filter-li">
                <p className="filter-para">Nursery</p>
                <button className="filter-btn">
                  <p className="filter-para">+</p>
                </button>
              </li>
              <li className="filter-li">
                <p className="filter-para">Ideal Plants Location</p>
                <button className="filter-btn">
                  <p className="filter-para">+</p>
                </button>
              </li>
              <li className="filter-li">
                <p className="filter-para">Indoor/Outdoor</p>
                <button className="filter-btn">
                  <p className="filter-para">+</p>
                </button>
              </li>
              <li className="filter-li">
                <p className="filter-para">Maintenance</p>
                <button className="filter-btn">
                  <p className="filter-para">+</p>
                </button>
              </li>
              <li className="filter-li">
                <p className="filter-para">Plant Size</p>
                <button className="filter-btn">
                  <p className="filter-para">+</p>
                </button>
              </li>
              <li className="filter-li">
                <p className="filter-para">Water Schedule</p>
                <button className="filter-btn">
                  <p className="filter-para">+</p>
                </button>
              </li>
              <li className="filter-li">
                <p className="filter-para">Color</p>
                <button className="filter-btn">
                  <p className="filter-para">+</p>
                </button>
              </li>
              <li className="filter-li">
                <p className="filter-para">Seasonal</p>
                <button className="filter-btn">
                  <p className="filter-para">+</p>
                </button>
              </li>
              <li className="filter-li">
                <p className="filter-para">Light Efficient</p>
                <button className="filter-btn">
                  <p className="filter-para">+</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="products-list-cont">
          <div className="sort-cont">
            <p className="sort-para">300 Products</p>
            <button className="sort-btn">
              SORT BY
              <RiArrowDropDownLine />
            </button>
          </div>
          <ul className="products-ul">
            <li className="product-li">
              <div className="img-cont">
                <button className="heart-btn">
                  <FaHeart className="heart-icon" />
                </button>
                <img
                  className="main-img"
                  src="https://res.cloudinary.com/dazwjceuy/image/upload/v1729315802/e1ce63ff429a0c018fd6e2e5dd614458_ldbyn5.png"
                  alt="img"
                />
                <button className="view-btn">
                  <Link className="view-link" to="/thankyou">
                    View Product
                  </Link>
                </button>
              </div>
              <div className="text-cont">
                <h1 className="text-head">Monstera</h1>
                <p className="text-para">Indoor Planet, Low Maintenance</p>
                <div className="rating-cont">
                  <img
                    className="rating-img"
                    src="https://res.cloudinary.com/dazwjceuy/image/upload/v1729316094/image_10_ndbco7.png"
                    alt="rating"
                  />
                  <p className="text-para">4.9</p>
                </div>
                <div className="price-cont">
                  <p className="old-price">$359</p>
                  <p className="new-price">$299</p>
                </div>
                <div className="btns-cont">
                  <div className="popup-container">
                    <Popup
                      modal
                      trigger={
                        <div className="add-btns-cont">
                          <button className="minus-btn">-</button>
                          <button type="button" className="add-btn">
                            Add To Cart
                          </button>
                          <button className="plus-btn">+</button>
                        </div>
                      }
                    >
                      {(close) => (
                        <>
                          <div className="addd-to-cart-card">
                            <div className="atc-card">
                              <button
                                type="button"
                                onClick={() => close()}
                                className="atc-icon-btn"
                              >
                                <HiMiniXMark className="atc-icon" />
                              </button>
                              <h1 className="atc-top-head">Your Cart</h1>
                              <hr className="atc-hr-line" />
                              <h1 className="atc-head">
                                Congratulations <br /> Order Placed!
                              </h1>
                              <img
                                className="atc-img"
                                src="https://res.cloudinary.com/dazwjceuy/image/upload/v1729345027/plant_1_w8ch4e.svg"
                                alt="atc-img"
                              />
                              <h1 className="atc-name"> Monestra </h1>
                              <p className="atc-para">
                                Thank you for choosing Chaperone services. We
                                will soon get in touch with you!
                              </p>
                              <button
                                type="button"
                                onClick={() => close()}
                                className="atc-btn"
                              >
                                CONTINUE SHOPPING
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </Popup>
                  </div>
                  <button className="rent-btn">Buy or Rent</button>
                </div>
              </div>
            </li>
          </ul>
          <button className="view-more-btn">View More</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PlantsAndPots;
