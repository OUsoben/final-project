import React, { useTransition } from "react";
import "../styles/footerStyle.css";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const  {t} = useTranslation()
  return (
    <div>
      <footer className="w-lg-100 p-5 d-flex bgc-footer gap-5 col-lg-12 col-sm-6 col-md-8 ">
        <div className="p-5">
          <h5 className=" fw-blod ps-3 h-font">{t("Footer.title1")}</h5>
          <ul className="d-grid gap-3 pt-5 list-font ">
            <li className="fw-light">{t("Footer.li1")}</li>
            <li>{t("Footer.li2")}</li>
            <li>{t("Footer.li3")}</li>
            <li>{t("Footer.li4")}</li>
            <li>{t("Footer.li5")}</li>
            <li>{t("Footer.li6")}</li>
          </ul>
        </div>
        <div className="p-5 ms-3">
          <h5 className=" fw-blod ps-3 h-font">{t("Footer.title2")}</h5>
          <ul className="d-grid gap-3 pt-5 list-font ">
            <li className="fw-light">{t("Footer.li1")}</li>
            <li>{t("Footer.li7")}</li>
            <li>{t("Footer.li8")}</li>
            <li>{t("Footer.li9")}</li>
            <li>{t("Footer.li10")}</li>
            <li>{t("Footer.li11")}</li>
          </ul>
        </div>
        <div className="p-5 ms-3">
          <h5 className=" fw-blod ps-3 h-font">{t("Footer.title3")}</h5>
          <ul className="d-grid gap-3 pt-5 list-font ">
            <li>{t("Footer.li11")}</li>
            <li>{t("Footer.li9")}</li>
            <li>{t("Footer.li10")}</li>
            <li>{t("Footer.li12")}</li>
            <li>{t("Footer.li13")}</li>
            <li>{t("Footer.li14")}</li>
          </ul>
        </div>

        <div className="pt-5 ms-5">
          <h5 className=" fw-blod ps-3 h-font">{t("Footer.heading1")}</h5>
          <div className="d-flex gap-4 mt-4 m-3">
            <FontAwesomeIcon icon={faTwitter} color="white" size="2x" />
            <FontAwesomeIcon icon={faFacebook} color="white" size="2x" />
            <FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
            <FontAwesomeIcon icon={faYoutube} color="white" size="2x" />
            <FontAwesomeIcon icon={faLinkedin} color="white" size="2x" />
      
          </div>
          <h5 className=" fw-blod ps-3 pt-5 mt-2 h-font ">{t("Footer.heading2")}</h5>
          <div class="input-group mt-5 ms-3">
            <input
              type="text"
              class="form-control p-3 pe-5 ps-5  "
              placeholder={t("Footer.placeholder")}
              aria-label="Enter Email Address"
              aria-describedby="basic-addon2"
            />
            <span
              style={{ background: "#B31312" }}
              class="input-group-text text-white pe-4 ps-4"
              id="basic-addon2"
            >
              {t("Footer.btn1")}
            </span>
          </div>
        </div>
 
      </footer>
    </div>
  );
};

export default Footer;
