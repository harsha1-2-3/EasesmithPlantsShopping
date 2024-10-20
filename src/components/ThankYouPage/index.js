import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

const ThankYouPage = () => {
  return (
    <>
      <Header />
      <div className="add-to-cart-card">
        <div className="atc-card">
          <h1 className="atc-top-head">Thank You Page</h1>
          <hr className="atc-hr-line" />
          <h1 className="atc-head">Thanks for you interest in </h1>
          <img
            className="atc-img"
            src="https://res.cloudinary.com/dazwjceuy/image/upload/v1729345027/plant_1_w8ch4e.svg"
            alt="atc-img"
          />
          <h1 className="atc-name"> [Product Name] </h1>
          <button className="atc-btn">CONTINUE SHOPPING</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ThankYouPage;
