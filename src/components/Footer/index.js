import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import "./index.css";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => (
  <div className="bg-footer">
    <div className="all-details-cont">
      <div className="subscribe-cont">
        <h1 className="s-head">SUBSCRIBE TO OUR NEWSLETTER</h1>
        <p className="s-para">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necesbus enim
        </p>
        <input
          className="s-input"
          placeholder="Enter Your Email Address"
          type="text"
        />
        <button className="s-btn">SUBSCRIBE</button>
      </div>
      <div className="about-cont">
        <h1 className="a-head">About Us</h1>
        <p className="a-para">Our Story</p>
        <p className="a-para">Blogs</p>
        <p className="a-para">Careers</p>
        <p className="a-para">Contact Us</p>
        <p className="a-para">Help & Support</p>
      </div>
      <div className="about-cont">
        <h1 className="a-head">Our Services</h1>
        <p className="a-para">Book Maali</p>
        <p className="a-para">Plant Day Care</p>
        <p className="a-para">Rent Plants</p>
        <p className="a-para">Plants & Pots</p>
        <p className="a-para">Gardening Tools</p>
      </div>
      <div className="about-cont">
        <h1 className="a-head">Useful Links</h1>
        <p className="a-para">My Account</p>
        <p className="a-para">Orders & Returns</p>
        <p className="a-para">Track Order</p>
        <p className="a-para">Terms & Conditions</p>
        <p className="a-para">Privacy Policy</p>
        <p className="a-para">Return, Refund and Replacement Policy</p>
      </div>
      <div className="about-cont">
        <h1 className="a-head">Get In Touch</h1>
        <p className="a-para">
          Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
          Gurgaon, Haryana, India 122003 Call: +919958287272 Email:
          care@chaperoneplants.com
        </p>
        <p className="a-para">Call:</p>
        <p className="a-para">+919958287272</p>
        <p className="a-para">Email:</p>
        <p className="a-para">care@chaperoneplants.com</p>
      </div>
    </div>
    <div className="description-cont">
      <h1 className="d-head">Chaperone</h1>
      <p className="d-para">
        Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
        necessitatibus enim ut internos accusantium a numquam autem ab rerum
        omnis. Non molestiae ratione et laborum doloribus aut molestiae
        voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
        est voluptatem eius. Et architecto nihil id labore omnis hic iste
        deleniti et porro aspernatur.
      </p>
      <h1 className="d-head">Follow Us On</h1>
      <div className="d-icons-cont">
        <FaInstagram className="d-icon" />
        <FaFacebookF className="d-icon" />
        <FaXTwitter className="d-icon" />
        <FaYoutube className="d-icon" />
        <FaLinkedin className="d-icon" />
      </div>
    </div>
    <hr className="hr-line" />
    <p className="end-line-para">© 2023, chaperone.com All rights reserved.</p>
  </div>
);
export default Footer;
