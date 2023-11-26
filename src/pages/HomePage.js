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

const HomePage = () => {
  return (
    <div>
      <section style={{ height: "500px" }} className="w-100 d-flex">
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
          <button className="mt-5 btn p-2 btn-primary btn-shop  ps-4 pe-4">
            Shopping Now
          </button>
        </div>
        <div className="d-flex">
          <img
            className="img-fluid mt-2 ms-5 "
            src="https://static.vecteezy.com/system/resources/previews/010/871/795/original/3d-man-doing-online-marketing-png.png"
            alt="Shoes"
          />
        </div>
      </section>

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

      <section
        style={{ height: "350px" }}
        className="w-75  mt-5 container d-flex "
      >
        <img
          className="rounded"
          src="https://img.freepik.com/p cx9xafqdws6 remium-psd/3d-female-character-sitting-stack-coins_23-2148938914.jpg"
          alt=""
        />
        <div className="p-4 ms-5 fs-6">
          <h5 className="fw-bold">
            Don't wait for <br /> anything. Buy it today!
          </h5>
          <p className="pt-3">Let's enjoy with our store</p>
          <p>
            The sport store is the great choice to yours. <br />
            that eazier to yourself to get everything you need...! <br />
            less time to buy and have it all you want to buy.
          </p>
          <button className="btn btn-primary mt-4">Shop Now</button>
        </div>
      </section>
   
      <section style={{ height: "600px" }} className="w-100  mt-5">
        <h2 className="fw-bold container  p-5 ">WaterSports</h2>

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
      <section
        style={{ height: "350px" }}
        className="w-75 container mt-5 d-flex "
      >
        <div className=" w-75 fs-6 pt-4 ">
          <h5 className="fw-bold">First-class materials and  innovative <br /> technologies</h5>
          <p className="pt-3">
          Quality doesn’t have to be expensive! Being sports enthusiasts ourselves we know about the importance of high-quality sports equipment. That’s why we regularly offer low-priced sportswear by famous manufacturers. Comfortable shorts, breathable shoes, windproof tracksuit jackets – we have them all! And you don’t have to go without your favourite brand. We list adidas, Nike and PUMA but also Reebok, Lonsdale and Dunlop. Our range of products is huge, and we permanently add new products. 
          </p>
          <button className="btn btn-primary mt-4">View more </button>
        </div>
        <img
          className="rounded ms-5"
          src="https://img.freepik.com/premium-psd/3d-male-cartoon-character_235528-895.jpg?w=2000"
          alt=""
        />
      </section>
            <section className="mt-5">
              <HomePro/>
            </section>
    </div>
  );
};

export default HomePage;
