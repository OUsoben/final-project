import React from "react";
import "../styles/footerStyle.css";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <footer className="w-lg-100 p-5 d-flex bgc-footer gap-5 col-lg-12 col-sm-6 col-md-8 ">
        <div className="p-5">
          <h5 className=" fw-blod ps-3 h-font">MEN</h5>
          <ul className="d-grid gap-3 pt-5 list-font ">
            <li className="fw-light">Jeans</li>
            <li>Jumpers</li>
            <li>Leatger</li>
            <li>Shorts</li>
            <li>Boots</li>
            <li>Watches</li>
          </ul>
        </div>
        <div className="p-5 ms-3">
          <h5 className=" fw-blod ps-3 h-font">WOMEN</h5>
          <ul className="d-grid gap-3 pt-5 list-font ">
            <li className="fw-light">Jeans</li>
            <li>Dresses</li>
            <li>Jumpsuits</li>
            <li>Shirts</li>
            <li>T-shirts</li>
            <li>Jackets</li>
          </ul>
        </div>
        <div className="p-5 ms-3">
          <h5 className=" fw-blod ps-3 h-font">KIDS</h5>
          <ul className="d-grid gap-3 pt-5 list-font ">
            <li>Jackit</li>
            <li>Shirts</li>
            <li>T-shirts</li>
            <li>Polos</li>
            <li>Sweatshirt</li>
            <li>Sweater</li>
          </ul>
        </div>

        <div className="pt-5 ms-5">
          <h5 className=" fw-blod ps-3 h-font">FOLLOW US</h5>
          <div className="d-flex gap-4 mt-4 m-3">
            <FontAwesomeIcon icon={faTwitter} color="#B31312" size="2x" />
            <FontAwesomeIcon icon={faFacebook} color="#B31312" size="2x" />
            <FontAwesomeIcon icon={faInstagram} color="#B31312" size="2x" />
            <FontAwesomeIcon icon={faYoutube} color="#B31312" size="2x" />
            <FontAwesomeIcon icon={faLinkedin} color="#B31312" size="2x" />
          </div>
          <h5 className=" fw-blod ps-3 pt-5 mt-2 h-font ">SUBSCRIBE US</h5>
          <div class="input-group mt-5 ms-3">
            <input
              type="text"
              class="form-control p-3 pe-5 ps-5  "
              placeholder="Enter Email Address"
              aria-label="Enter Email Address"
              aria-describedby="basic-addon2"
            />
            <span
              style={{ background: "#B31312" }}
              class="input-group-text text-white pe-4 ps-4"
              id="basic-addon2"
            >
              Subscribe
            </span>
          </div>
        </div>
 
      </footer>
    </div>
  );
};

export default Footer;
