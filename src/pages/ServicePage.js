  import React from "react";
  import "../styles/serviceStyle.css";
  import { faBoxOpen, faComment, faDolly, faDoorOpen, faPlane, faShip,  faTruck } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { icon } from "@fortawesome/fontawesome-svg-core";
  import { useTranslation } from "react-i18next";

  const ServicePage = () => {
    const {t} = useTranslation()
    return (
      <div className="bg-light">
        <sectionuseTranslation
          style={{ height: "500px" }}
          className=" pt-5 d-flex w-100 order-2 container "
        >
          <div>
            <h1 className=" fw-bold font-title">
            {t("Servicepage.heading1")}
            </h1>
            <p className=" fs-5 ">
            {t("Servicepage.p1")}
            </p>
          
          </div>
          
          <img
            className="img-fluid rounded ms-5"
            src={require("../images/logo.png")}
            alt="Photo"
          />
        </sectionuseTranslation>
        <section className="text-center">
          <h2 className="fw-bold item-fonts"> {t("Servicepage.heading2")} </h2>
          <p className="text-muted">{t("Servicepage.p2")} </p>

          <div
            style={{ height: "120px" }}
            className="d-flex mt-3 w-75 container justify-content-center gap-5 "
          >
            <div className="w-25 rounded border border-dark d-flex">
              
            <FontAwesomeIcon className="mt-4 ms-3 icon-remove" icon={faTruck}  size="4x"/>
            <div className="pt-4 ps-2">
                <p className=" item-fonts pe-5 fw-bold text-danger">{t("Servicepage.h1")}</p>
                <p className="text-muted ps-3">{t("Servicepage.p3")}</p>
            </div>
              
            </div>
            <div className="w-25 rounded border border-dark d-flex">
              
              <FontAwesomeIcon className="mt-4 ms-3 icon-remove " icon={faDolly}  size="4x"/>
              <div className="pt-4 ps-2">
                  <p className= "item-fonts pe-5 fw-bold text-danger">{t("Servicepage.h2")}</p>
                  <p className="text-muted ps-3">{t("Servicepage.p3")}</p>
              </div>
                
              </div>
              <div className="w-25 rounded border border-dark d-flex">
              
              <FontAwesomeIcon className="mt-4 ms-3 icon-remove " icon={faShip}  size="4x"/>
              <div className="pt-4 ps-2">
                  <p className=" item-fonts pe-4 fw-bold text-danger">{t("Servicepage.h3")}</p>
                  <p className="text-muted ps-2">{t("Servicepage.p3")}</p>
              </div>
                
              </div>
    
          </div>
          
          <div
            style={{ height: "120px" }}
            className="d-flex mt-3 w-75 container justify-content-center gap-5 mt-5"
          >
            <div className="w-25 rounded border border-dark d-flex">
              
              <FontAwesomeIcon className="mt-4 ms-3 icon-remove " icon={faBoxOpen}  size="4x"/>
              <div className="pt-4 ps-2">
                  <p className="text-danger item-fonts pe-5 fw-bold">{t("Servicepage.h4")}</p>
                  <p className="text-muted ps-3 ">{t("Servicepage.p3")}</p>
              </div>
                
              </div>
              <div className="w-25 rounded border border-dark d-flex">
              
              <FontAwesomeIcon className="mt-4 ms-3 icon-remove " icon={faDoorOpen}  size="4x"/>
              <div className="pt-4 ps-2">
                  <p className="text-danger item-fonts pe-2 fw-bold">{t("Servicepage.h5")}</p>
                  <p className="text-muted ps-3">{t("Servicepage.p3")}</p>
              </div>
                
              </div>
              <div className="w-25 rounded border border-dark d-flex">
              
              <FontAwesomeIcon className="mt-4 ms-3 icon-remove" icon={faPlane}  size="4x"/>
              <div className="pt-4 ps-2 ">
                  <p className="text-danger item-fonts pe-5 fw-bold me-4">{t("Servicepage.h6")}</p>
                  <p className="text-muted ps-3">{t("Servicepage.p3")}</p>
              </div>
                
              </div>
          </div>
        </section>

        <section className="container mt-5 d-flex p-5">
          <img  style={{height: "400px"}}
            className="img-fluid "
            src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-in-doubt-4872067-4081464.png"
            alt="Question"
          />  
          <div className="p-5  container ">
              <h2 className="fw-bold">{t("Servicepage.heading3")}</h2>
              <p>{t("Servicepage.p4")}.....</p>
                <div  className=" rounded card-comment">
         
                  <h3 className="fw-blod com-font pt-4 ps-3 "> <span className="pe-3 fs-4">   <FontAwesomeIcon icon={faComment}  /></span>{t("Servicepage.heading4")}</h3>
                    <input className="form-control w-75 ms-5 ps-3 border-3 border-dark mt-3 p-3" type="text" placeholder={t("Servicepage.heading4")}/>
                    <button className="btn btn-lg btn-warning ps-3 pe-3  mt-4 ms-5 fw-bold ">{t("Servicepage.btn1")}</button>
                  <button className=" btn btn-lg  mt-4 ms-3">{t("Servicepage.btn2")}</button>
                </div>
              </div>
        </section>
       
      </div>
    );
  };

  export default ServicePage;
