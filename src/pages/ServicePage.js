  import React from "react";
  import "../styles/serviceStyle.css";
  import { faBoxOpen, faComment, faDolly, faDoorOpen, faPlane, faShip,  faTruck } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { icon } from "@fortawesome/fontawesome-svg-core";

  const ServicePage = () => {
    
    return (
      <div className="bg-light">
        <section
          style={{ height: "500px" }}
          className=" pt-5 d-flex w-100 order-2 container "
        >
          <div>
            <h1 className=" fw-bold font-title">
              We'll provide the best service and Quality of the products
            </h1>
            <p className=" fs-5 ">
              We are care all of you to get more sport products . you come to the
              right place our shop has more everything what you want to buy come
              and get it today.At the sport store, we believe that exceptional customer service is not just a commitment; it's a promise we uphold with every interaction.  Whether you have questions about our products, need recommendations, or want to learn more, our team is here to provide you with the information you seek.
            </p>
          
          </div>
          
          <img
            className="img-fluid rounded ms-5"
            src={require("../images/logo.png")}
            alt="Photo"
          />
        </section>
        <section className="text-center">
          <h2 className="fw-bold item-fonts"> services </h2>
          <p className="text-muted">All The service Provided by us </p>

          <div
            style={{ height: "120px" }}
            className="d-flex mt-3 w-75 container justify-content-center gap-5 "
          >
            <div className="w-25 rounded border border-dark d-flex">
              
            <FontAwesomeIcon className="mt-4 ms-3 icon-remove" icon={faTruck}  size="4x"/>
            <div className="pt-4 ps-2">
                <p className=" item-fonts pe-5 fw-bold text-danger">LOGISTIC</p>
                <p className="text-muted ps-3">it is a long estimated.</p>
            </div>
              
            </div>
            <div className="w-25 rounded border border-dark d-flex">
              
              <FontAwesomeIcon className="mt-4 ms-3 icon-remove " icon={faDolly}  size="4x"/>
              <div className="pt-4 ps-2">
                  <p className= "item-fonts pe-5 fw-bold text-danger">TRANSPORT</p>
                  <p className="text-muted ps-3">it is a long estimated.</p>
              </div>
                
              </div>
              <div className="w-25 rounded border border-dark d-flex">
              
              <FontAwesomeIcon className="mt-4 ms-3 icon-remove " icon={faShip}  size="4x"/>
              <div className="pt-4 ps-2">
                  <p className=" item-fonts pe-4 fw-bold text-danger">WAREHOUSING</p>
                  <p className="text-muted ps-2">it is a long estimated.</p>
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
                  <p className="text-danger item-fonts pe-5 fw-bold">PACKAGING</p>
                  <p className="text-muted ps-3 ">it is a long estimated.</p>
              </div>
                
              </div>
              <div className="w-25 rounded border border-dark d-flex">
              
              <FontAwesomeIcon className="mt-4 ms-3 icon-remove " icon={faDoorOpen}  size="4x"/>
              <div className="pt-4 ps-2">
                  <p className="text-danger item-fonts pe-2 fw-bold">DOOR TO DOOR</p>
                  <p className="text-muted ps-3">it is a long estimated.</p>
              </div>
                
              </div>
              <div className="w-25 rounded border border-dark d-flex">
              
              <FontAwesomeIcon className="mt-4 ms-3 icon-remove" icon={faPlane}  size="4x"/>
              <div className="pt-4 ps-2 ">
                  <p className="text-danger item-fonts pe-5 fw-bold me-4">CARGO</p>
                  <p className="text-muted ps-3">it is a long estimated.</p>
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
              <h2 className="fw-bold">If you have any Questions or Recommendations</h2>
              <p>Please drop your comments down below.....</p>
                <div  className=" rounded card-comment">
         
                  <h3 className="fw-blod com-font pt-4 ps-3 "> <span className="pe-3 fs-4">   <FontAwesomeIcon icon={faComment}  /></span> Comments</h3>
                    <input className="form-control w-75 ms-5 ps-3 border-3 border-dark mt-3 p-3" type="text" placeholder="Comments...."/>
                    <button className="btn btn-lg btn-warning ps-3 pe-3  mt-4 ms-5 fw-bold ">Sand</button>
                    <button className=" btn btn-lg  mt-4 ms-3">reset</button>
                </div>
              </div>
        </section>
       
      </div>
    );
  };

  export default ServicePage;
