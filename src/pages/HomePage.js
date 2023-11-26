import React from "react";
import "../styles/homePageStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeCard from "../components/HomeCard";
import HomePro from "../components/HomePro";


let listProduct = [
  {
    title: "Men's",
    imgUrl:
      "https://sportstore.co.uk/cdn/shop/collections/AFTERSHOKZ-AEROPEX-Wireless-Bone-Conduction-Headphones20-e1662725588895.webp?v=1696510250&width=535",
  },
  {
    title: "Women's",
    imgUrl:
      "https://sportstore.co.uk/cdn/shop/collections/AFTERSHOKZ-AEROPEX-Wireless-Bone-Conduction-Headphones15-e1662725637323_72284e07-5b5a-4fdf-bfdc-29440808775b.webp?v=1696510167&width=535",
  },
  {
    title: "Kid's",
    imgUrl:
      "https://www.next.com.au/nxtcms/resource/blob/5160490/4e01aa488a0b05a049c2798aab0c6205/hero-boys-data.jpg",
  },
];
let waterSoprtList = [
  {
    title: "Water Sports",
    imgUrl:
      "https://previews.123rf.com/images/tonobalaguer/tonobalaguer1511/tonobalaguer151100025/54828488-kid-paddle-surf-surfer-girl-avec-ligne-de-plage-de-la-m%C3%A9diterran%C3%A9e.jpg",
  },
  {
    title: "Swimwear",
    imgUrl:
      "https://sportstore.co.uk/cdn/shop/collections/32.webp?v=1694090813&width=535",
  },
  {
    title: "Swimwear",
    imgUrl:
      "https://sportstore.co.uk/cdn/shop/collections/pexels-shvets-production-8028291-scaled.webp?v=1694090853&width=535",
  },
];


let shoesList = [ 
  {
    title : "Nike Shoes",
    imgUrl : "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png"
  },
  {
    title : "Air force 1",
    imgUrl: "https://www.courir.com/on/demandware.static/-/Sites-master-catalog-courir/default/dw2bc08c65/images/hi-res/001498199_101.png"
  },
  {
    title : "Nike Shoes",
    imgUrl: require("../images/shoes2.png")
  },
  {
    title : "Air Jodan",
    imgUrl: require("../images/shoes4.png")
  },
  {
    title : "Air Retro",
    imgUrl : "https://cdn.sanity.io/images/pu5wtzfc/production/4dcf6688f910bf1e3e51f2bea5b306abe9996dbf-2000x1250.png"
  },
  {
    title : "Jordon",
    imgUrl : "https://images.squarespace-cdn.com/content/v1/6168cc360be4c71ad7a4693d/1675998134424-BQFLP4V1F8O1PF5YS88P/J1_032.png.png?format=500w"
  },
  {
    title : "Nike Air Max",
    imgUrl : require("../images/shoes5.png")
  },
  {
    title : "Air force Wmns",
    imgUrl : "https://media.karousell.com/media/photos/products/2023/10/24/nike_wmns_air_force_1_07_white_1698111447_4851c130" 
  },

]
const HomePage = () => {
  return (
    <div className="bg-light">
      <section style={{ height: "450px" }} className="w-100 d-flex">
        <div className="  p-5 mt-3 w-50 ">
          <p className="fs-6 mt-5 ms-5 ps-5 sport-info m-0">
            Beautiful Sneaker Nike
          </p>
          <h1 className="ms-5 ps-4 ps-5 fw-bold ">SPORTS SHOES</h1>
          <div className="d-flex">
            <h4 className="ms-5 ps-5 fw-bold pt-2">
              GET UP TO <span className="text-info">30% </span>
              OFF
            </h4>
            <p className="text-info ps-2 sport-info pt-2">
              {" "}
              ALL SPORTS SHOES
            </p>
          </div>
          <button className="mt-5 btn p-2 btn btn-outline-dark btn-shop  ps-4 pe-4">
            Shopping Now
          </button>
          
        </div>
        <div className="d-flex">
          <img
            className="img-fluid mt-2 ms-5 "
            src="https://www.courir.com/on/demandware.static/-/Sites-master-catalog-courir/default/dw2bc08c65/images/hi-res/001498199_101.png"
            alt="Shoes"
          />
        </div>
      </section>
    <hr />
      <section style={{ height: "600px" }} className="w-100 ">
        <h2 className="fw-bold container  p-5 ">
          What are you looking for?...
        </h2>

        <div className="row  ms-5 me-5">
          {listProduct.map((product, index) => {
            return (
              <div className="col-lg-3 col-md-12 col-sm-col ms-5 ">
                <HomeCard productData={product} />
              </div>
            );
          })}
        </div>
      </section>
      <section style={{ height: "600px" }} className="w-100 ">
        <h2 className="fw-bold container  p-5 "> <hr /> WaterSports</h2>

        <div className="row  ms-5 me-5">
          {waterSoprtList.map((product, index) => {
            return (
              <div className="col-lg-3 col-md-12 col-sm-col ms-5 ">
                <HomeCard productData={product} />
              </div>
            );
          })}
        </div>
      </section>
      <hr />
      <section
        style={{ height: "350px" }}
        className="w-75  mt-5 container d-flex "
      >
        <img
      
        style={{height: "240px"}}
          className="rounded-pill"
          src="https://img.freepik.com/p cx9xafqdws6 remium-psd/3d-female-character-sitting-stack-coins_23-2148938914.jpg"
          alt=""
        />
        <div className="p-4 ms-5 fs-6">
          <h5 className="fw-bold">
            Don't wait for <br /> anything. Buy it today!
          </h5>
          <p className="pt-3">Let's enjoy with our store</p>
          <p>
            The sport store is the great choice to yours.
            that eazier to yourself to get everything you need...! 
            less time to buy and have it all you want to buy.
            <br />Sign in for faster checkout and earn one Point for every $1 spent at our family of brands! 300 Points = $10 Reward.
          </p>
        
        </div>
      </section>
      <section
        style={{ height: "350px" }}
        className="w-75 container mt-5 d-flex "
      >
        <div className=" w-75 fs-6 pt-4 ">
          <h5 className="fw-bold">First-class materials and  innovative <br /> technologies</h5>
          <p className="pt-3">
          Quality doesn’t have to be expensive! Being sports enthusiasts ourselves we know about the importance of high-quality sports equipment. That’s why we regularly offer low-priced sportswear by famous manufacturers. Comfortable shorts, breathable shoes, windproof tracksuit jackets – we have them all! And you don’t have to go without your favourite brand. We list adidas, Nike and PUMA but also Reebok, Lonsdale and Dunlop. Our range of products is huge, and we permanently add new products. 
          </p>
 
        </div>
        <img
        style={{height: "240px"}}
          className="rounded-pill ms-5"
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1401702421.1699262363&semt=ais"
          alt=""
        />
      </section>
              <h1 className="mt-5"> <hr /></h1>
           <section className="w-100  p-5">
            <h2 className="fw-bold ps-5 ms-4"> Shoes</h2>
            <div className="row">
             {
              shoesList.map((product , index) => {
                return (
                  <div className="col-3 mt-4">
                    <HomePro  productData={product} />
                  </div>
                 
                )
              })
    }
              </div>
              <div className="mt-5 text-center">
              <button className="btn btn-outline-dark">View all</button>
              </div>
           </section>
    </div>
  );
};

export default HomePage;
