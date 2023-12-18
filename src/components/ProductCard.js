import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleLongText } from "../utils/helper";

import React from 'react'
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faBold } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({productData}) => {
  return (
    <div>
      <div class="container mt-3">
    <div class="d-flex justify-content-center row">
        <div class="col-md-10">
            <div class="row p-2 bg-white border rounded">
                <div class="col-md-3 mt-1">
                  <img class="img-fluid img-responsive rounded product-image"
                   src={productData.images[0]}
                  onError={({currentTarget})=>{
                    currentTarget.onerror = null  // prevent infinite loop
                    currentTarget.src = "https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png"
                  }}
                  
                  alt=""/></div>
                <div class="col-md-6 mt-1">
                    <h5>{
                              handleLongText(productData.title)
                        }</h5>
                    <div class="d-flex flex-row">
                        <div class="ratings mr-2">
                        <FontAwesomeIcon  icon={faStar} color="red" />
                        <FontAwesomeIcon icon={faStar} color="red" />
                        <FontAwesomeIcon icon={faStar} color="red" />
                        <FontAwesomeIcon icon={faStar}  color="red"/>
                        <FontAwesomeIcon icon={faStar}  color="red"/>
                          </div><span  className="ms-3">{
                          productData.id
                          }</span>
                    </div>
                    <div class="mt-1 mb-1 spec-1"><span>100% cotton</span><span class="dot"></span><span>Light weight</span><span class="dot"></span><span>Best finish<br/></span></div>
                    <div class="mt-1 mb-1 spec-1"><span>Unique design</span><span class="dot"></span><span>For men</span><span class="dot"></span><span>Casual<br/></span></div>
                    <p class="text-justify ">{
                           handleLongText(productData.description,150) 
                    }<br/><br/></p>
                </div>
                <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                        <h4 class="mr-1 me-2">${productData.price}</h4>
                    </div>
                    <h6 class="text-success">Free shipping</h6>
                    <div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm" type="button"
                     onClick={()=> {
                    
                     }}
                    >Details</button><button class="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button></div>
                </div>
            </div>
    </div>
    </div>
  </div>
 </div>
  )
}

export default ProductCard
