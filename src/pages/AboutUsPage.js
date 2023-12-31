import React from "react";
import "../styles/aboutUsStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLine, faLinkedinIn, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
const AboutUsPage = () => {
  const {t} = useTranslation()
  return (
    <div className="bg-light">
      <div className="text-center p-5">
        <h2 className="fw-bold">{t("AboutUsPage.h1")}</h2>
        <p className="text-muted">
        {t("AboutUsPage.p1")}
        </p>
      </div>

      <section className="ms-5 d-flex col-md-4 col-lg-11 col-sm-4 text-center">
        <div className=" text-center ">
          <h2 className="fw-bold p-4 "> {t("AboutUsPage.h2")}</h2>
          <p className="pe-5 pt-3">
          {t("AboutUsPage.p2")}
          </p>
        </div>
        <img
          className="img-fluid me-5 rounded h-50 col-lg-5  col-md-4"
          src="https://www.datacube.ae/static/about-us-ca5d21dd1cef3f0315b902b086eabf9f.jpg"
          alt=""
        />
      </section>
      <section className="p-5 me-5 d-flex col-lg-12 col-md-4 col-sm-4">
        <img
          className="img-fluid ms-5 mt-5 rounded col-lg-5 col-md-3 col-sm-3"
          src="https://t4.ftcdn.net/jpg/02/61/52/95/360_F_261529596_YZWJaMnYFSCM0FSCrxs71o6RrZ9MpP4D.jpg"
          alt=""
        />
        <div className="p-5 text-center">
          <h2 className="fw-bold p-5"> {t("AboutUsPage.h3")}</h2>
          <p>
          {t("AboutUsPage.p3")}
          </p>
        </div>
      </section>
      <section className="p-5 d-flex ">
        <div className="p-5 text-center">
          <h2 className="fw-bold p-5">{t("AboutUsPage.h4")}</h2>
          <p>
          {t("AboutUsPage.p4")}
          </p>
        </div>
        <img
          className="img-fluid col-lg-5 rounded me-5 col-md-3"
          src="https://chchurches.org/wp-content/uploads/2017/10/Fotolia_119039468_Subscription_Monthly_M.jpg"
          alt=""
        />
      </section>
      <section className="p-5 d-flex container ">
        <img
          className="  img-fluid col-lg-3  rounded"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/773px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
          alt=""
        />
        <div className="p-5">
          <h2 className="fw-bold ">{t("AboutUsPage.h5")}</h2>
          <p className="fs-5">{t("AboutUsPage.h6")}</p>
          <hr />
          <p>
          {t("AboutUsPage.p5")}
          </p>
          <h5 className="fw-bold">{t("AboutUsPage.h7")}</h5>
          <hr />
          <div className=" d-flex">
          <FontAwesomeIcon className="text-primary" icon={faTwitter} size="2x" />
          <FontAwesomeIcon className="text-primary ps-3" icon={faInstagram} size="2x" />
          <FontAwesomeIcon className="text-primary ps-3" icon={faFacebook} size="2x" />
          <FontAwesomeIcon className="text-primary ps-3" icon={faTiktok} size="2x" />
           </div>
          
        </div>
      </section>
      <section className="p-5 d-flex  col-lg-10 ms-5">
        <div className="p-5 container">
          <h2 className="fw-bold ">{t("AboutUsPage.h8")}</h2>
          <p className="fs-5">{t("AboutUsPage.h9")}</p>
          <hr />
          <p>
          {t("AboutUsPage.p6")}
          </p>
          <h5 className="fw-bold">{t("AboutUsPage.h7")}</h5>
          <hr />
          <div className=" d-flex">
          <FontAwesomeIcon className="text-primary" icon={faTwitter} size="2x" />
          <FontAwesomeIcon className="text-primary ps-3" icon={faInstagram} size="2x" />
          <FontAwesomeIcon className="text-primary ps-3" icon={faFacebook} size="2x" />
          <FontAwesomeIcon className="text-primary ps-3" icon={faTiktok} size="2x" />
           </div>
        </div>
        <img
          className="  img-fluid col-lg-3  rounded"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </section>
    
    </div>
  );
};

export default AboutUsPage;
