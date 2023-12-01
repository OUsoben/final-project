import React from "react";
import "../styles/serviceStyle.css";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServicePage = () => {
  return (
    <div>
      <section
        style={{ height: "500px" }}
        className=" pt-5 d-flex w-100 order-2 container "
      >
        <div>
          <h1 className=" fw-bold font-title">
            We'll provide the best service and Quality of the products
          </h1>
          <p className=" fs-5">
            We are care all of you to get more sport products . you come to the
            right place our shop has more everything what you want to buy come
            and get it today
          </p>
          <button className="btn btn-lg btn-outline-primary mt-5">
            Get Stated
          </button>
        </div>
        <img
          className="img-fluid"
          src="https://static.vecteezy.com/system/resources/previews/011/382/018/original/business-people-gather-in-the-meeting-room-3d-character-illustration-png.png"
          alt="Photo"
        />
      </section>
      <section
        style={{ height: "120px" }}
        className="w-75 mt-5  container gap-2 d-flex "
      >
        <img
          className="ms-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2k6ui40rgVJkaRfVrlqyng0iep_6m8_yvW9uKgGJXrIvB6qHOUVyWC1vpB5hMmkeMIc&usqp=CAU"
          alt=""
        />
        <img
          src="https://thumbs.dreamstime.com/b/adidas-sport-clothing-brand-logo-editorial-image-vinnitsia-ukraine-june-222082589.jpg"
          alt=""
        />
        <img
          className="ms-4"
          src="https://logowik.com/content/uploads/images/697_nike.jpg"
          alt=""
        />
        <img
          className="img-fluid"
          src="https://buystickershere.com/cdn/shop/products/606-vans_black_oval_1000x.jpg?v=1650738873"
          alt=""
        />
        <img
          className="ms-5"
          src="https://brandlogos.net/wp-content/uploads/2015/05/the_north_face-logo_brandlogos.net_qxwtp-512x512.png"
          alt=""
        />
        <img
          className="ms-3"
          src="https://www.logo.wine/a/logo/Fila_(company)/Fila_(company)-Logo.wine.svg"
          alt=""
        />
      </section>
      <section className="container mt-5 d-flex p-5">
        <img
          className="img-fluid rounded mt-5 s-5"
          src="https://media.istockphoto.com/id/177864244/photo/sports-equipment.jpg?s=612x612&w=0&k=20&c=giZSHE3tqXuE0I5DgoaD-YvdDy3EQnctCDMElezDRvY="
          alt=""
        />
        <div className="p-5">
          <h1 className="fw-bold"> We focused on...</h1>
          <div className="ps-3">
            <p className=" fs-5">
              <span className="me-2">
                <FontAwesomeIcon icon={faSquareCheck} />
              </span>
              Quality of products
            </p>
            <p className=" fs-5">
              <span className="me-2">
                <FontAwesomeIcon icon={faSquareCheck} />
              </span>
              Good price
            </p>
            <p className=" fs-5">
              <span className="me-2">
                <FontAwesomeIcon icon={faSquareCheck} />
              </span>
              Less time
            </p>
            <p className=" fs-5">
              <span className="me-2">
                <FontAwesomeIcon icon={faSquareCheck} />
              </span>
              Get more and more
            </p>
            <p className=" fs-5">
              <span className="me-2">
                <FontAwesomeIcon icon={faSquareCheck} />
              </span>
              Happier
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
