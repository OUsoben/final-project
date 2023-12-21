import React, { useEffect } from 'react'
import "../styles/productDetailStyle.css"
import { useParams } from 'react-router-dom'
import { GET_PRODUCT_BY_ID } from '../services/productService';
import { useState } from 'react';

const ProductDetail = () => {
  let {id} = useParams();

  const [products,setProducts] = useState({})
  useEffect (()=>{
    GET_PRODUCT_BY_ID(id).then(
      response =>{
        console.log("Response: " , response)
        setProducts(response)
      }
    ).catch(error => {
      console.log("Error: " + error);
    })
  },[])
 console.log("of all the products : " , products);
  return (
    <div className="container mt-3  flex-column    flex-lg-row d-flex details-product">
      <div className="slider-image col-md-12 col-lg-6 order-1 d-flex  justify-content-center flex-column align-items-center gap-3">
        {/* output images  */}

        <div className="image-wrapping position-relative   img-fluid"
          style={{ width: "500px", height: "600px", overflow: "hidden" }}
        >
          <img
            className="img-fluid rounded-3 
              position-absolute top-0 left-0 object-fit-cover"
            style={{ width: "100%", height: "100%" }}
            src=
            
              
                  {products.images}
  
          
            

          />
        </div>
       
        <div className="d-flex gap-2 justify-content-center p-2 w-50">

      <img 
        className="img-fluid w-25 object-fit-contain"
        src = "https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg"
      
      />
 </div>

</div>
 <div className="text-side ms-5 order-md-2 mb-4">
   <p> {products.description} </p>
   <h1>{products.title}</h1>
 </div>
   </div>
  )
}

export default ProductDetail