import React, { useEffect } from "react";
import "../styles/productDetailStyle.css";
import { useParams } from "react-router-dom";
import { GET_PRODUCT_BY_ID } from "../services/productService";
import { useState } from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Placeholder } from "react-bootstrap";

const ProductDetail = () => {
  let { id } = useParams();

  const [products, setProducts] = useState({});
  const [chosenImage, setChosenImage] = useState(
    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
  );
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    GET_PRODUCT_BY_ID(id)
      .then((response) => {
        console.log("Response: ", response);
        if (response.images.length > 0){
          setChosenImage(response.images[0]);
        }
        setIsLoading(false)
        setProducts(response);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }, []);
  console.log("of all the products : ", products);
  return (
    <div className="container mt-3  flex-column    flex-lg-row d-flex details-product">
      <div className="slider-image col-md-12 col-lg-6 order-1 d-flex  justify-content-center flex-column align-items-center gap-3">
        {/* output images  */}

        <div
          className="image-wrapping position-relative   img-fluid"
          style={{ width: "500px", height: "600px", overflow: "hidden" }}
        >
          <img
            className="img-fluid rounded-3 
              position-absolute top-0 left-0 object-fit-cover"
            style={{ width: "100%", height: "100%" }}
            src= {chosenImage}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
            }}
          />
        </div>

        <div className="d-flex gap-2 justify-content-center p-2 w-50">
          {
          products?.images?.length > 1 &&
          products?.images?.map((imageValue, index) => {
            return (
              <img
                key={index}
                className="img-fluid w-25 object-fit-contain"
                src={imageValue}

                onClick={()=>{
                  setChosenImage(imageValue)
                }}

                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="text-side ms-5 order-md-2 mb-4 p-5">
        <h1 className="font-title">     
          { 
          isLoading ? 
          <>
            <Placeholder   xs={12} size="md" style={{ width: '420px' }} />
          </> :  
          products.title
          }</h1>
        <hr />

        <p className="font-description"> {
        isLoading ? 
        <>
         
          <Placeholder className="w-75" /> <Placeholder style={{ width: '100%' }} />
          <Placeholder className="w-10" /> <Placeholder style={{ width: '70%' }} />
          <Placeholder className="w-25" /> <Placeholder style={{ width: '70%' }} />
        
        </>
         :
        products.description
        
        } </p>
        <h5 className="pt-3 fs-4 fw-bold">
          {" "}
   
            
          ${
          products.price}
          {Number.isInteger(products.price) ? ".00" : ""}
        </h5>

        <div className="d-flex pt-3">
          <FontAwesomeIcon icon={faStar} color="red" />
          <FontAwesomeIcon icon={faStar} color="red" />
          <FontAwesomeIcon icon={faStar} color="red" />
          <FontAwesomeIcon icon={faStar} color="red" />
          <FontAwesomeIcon icon={faStar} color="red" />
        </div>
        <div>
          <p className="fs-5 pt-4 font-title">Colour</p>

          <button
            style={{ width: "30px", height: "30px" }}
            className="btn btn-warning rounded-circle "
          ></button>
          <button
            style={{ width: "30px", height: "30px" }}
            className="btn btn-danger rounded-circle ms-2"
          ></button>
          <button
            style={{ width: "30px", height: "30px" }}
            className="btn btn-light rounded-circle ms-2"
          ></button>
          <button
            style={{ width: "30px", height: "30px" }}
            className="btn btn-dark rounded-circle ms-2"
          ></button>
          <button
            style={{ width: "30px", height: "30px" }}
            className="btn btn-success rounded-circle ms-2"
          ></button>
        </div>
        <div className="d-flex mt-5">
          <button className="btn btn-outline-dark me-2"> Buy Now</button>
          <button className="btn btn-dark">Add item</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
