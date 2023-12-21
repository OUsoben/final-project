import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { GET_ALL_PRODUCT } from '../services/productService'
import "../styles/productCardStyle.css"
import PlaceHolderCard from '../components/PlaceHolderCard'


const ProductPage = () => {
  const  [products,setProducts] = useState([])
  const  [isLoading,setIsLoading] = useState(true)
       useEffect(()=>{
        GET_ALL_PRODUCT().then(
          response=>{ 
              setProducts(response)
              console.log(response)
              setIsLoading(false)
        }).catch(
          error=>{ console.log("Error is  : " , error)})
      },[])
     
      // function to show the place holder card 

      const placeHolderCards = (number) =>{
        let placeholders =[]
         for (var i =0 ; i< number ;i ++)
         placeholders.push(
        <div className="col-12">
          <PlaceHolderCard/>
        </div>
        )
         return  placeholders
      }
  return (
    <div>
     
        <div className="container">
              <div className="row ">
                {
                  isLoading ? (
                    <>
                       {placeHolderCards(3)}
                    </>
                  ):<> 
                  {
                  products.map( product => {
                    return (
                        <div className="">
                          <ProductCard productData={product}/>
                        </div>
                    )
                  })
                }
                  </>
                }
               
              </div>
        </div>
        </div>
   

  )
}

export default ProductPage