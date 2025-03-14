import { Link } from "react-router-dom";
import Header from "../Header";
import "./index.css";

const ThankYouPage = () => {
  return (
    <>
      <Header />
      <div className="add-to-cart-card">
        <div className="atc-card">
          <h1 className="atc-top-head">Thank You</h1>
          <hr className="atc-hr-line" />
          <h1 className="atc-head">Thanks for you interest in </h1>
          <img
            className="atc-img"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1729315802/e1ce63ff429a0c018fd6e2e5dd614458_ldbyn5.png"
            alt="atc-img"
          />
          <h1 className="atc-name"> Monestra </h1>
          <button className="atc-btn">
            <Link className="view-link" to="/">
              CONTINUE SHOPPING
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default ThankYouPage;
