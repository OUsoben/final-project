import React from "react";
import "../styles/aboutUsStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const AboutUsPage = () => {
  return (
    <div className="bg-light">
      <div className="text-center p-5">
        <h2 className="fw-bold"> About Us</h2>
        <p className="text-muted">
          Welcome to our sports store, where passion meets performance!
        </p>
      </div>

      <section className="ms-5 d-flex col-md-4 col-lg-11 col-sm-4 text-center">
        <div className=" text-center ">
          <h2 className="fw-bold p-4 ">About Our Sports Store</h2>
          <p className="pe-5 pt-3">
            Welcome to The sport store, your one-stop destination for all your
            sports and fitness needs! At The sport store , we are passionate
            about helping you achieve your athletic goals by providing
            top-quality sports gear and accessories. Let me take you on a brief
            journey through what makes us stand out. At our store, we are
            dedicated to providing high-quality sports gear and equipment to
            athletes of all levels. Whether you're a professional athlete or a
            weekend warrior, we have the gear you need to succeed.
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
          <h2 className="fw-bold p-5">Our Mission</h2>
          <p>
            At The Sport Store, our mission is to empower individuals on their
            journey to a healthier, more active lifestyle. We strive to be more
            than just a sports store; we aim to be a catalyst for personal
            growth, community engagement, and athletic excellence. Our mission
            is to inspire and empower people to lead active and healthy
            lifestyles through the joy of sports. We believe in the
            transformative power of sports and aim to make quality sports
            equipment accessible to everyone.
          </p>
        </div>
      </section>
      <section className="p-5 d-flex ">
        <div className="p-5 text-center">
          <h2 className="fw-bold p-5">Our Team</h2>
          <p>
            Explore our wide range of products, including athletic apparel,
            footwear, accessories, and more. Our knowledgeable staff is here to
            help you find the perfect gear to elevate your game.
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
          <h2 className="fw-bold ">Mr.Elon Musk</h2>
          <p className="fs-5">CEO, Founder</p>
          <hr />
          <p>
            Hello, The sport Store community! This is Elon Musk , and I am
            incredibly excited to connect with you today as the CEO of our
            beloved sports store. At the Sport store, our mission goes beyond
            simply providing sports gear — we are dedicated to empowering each
            of you on your unique journey to a healthier, more active
            lifestyle.As we look ahead, our focus remains on innovation,
            customer satisfaction, and community engagement. I can't wait to
            share more details with you soon.
          </p>
          <h5 className="fw-bold">FOLLOW ME</h5>
          <hr />
          <div className="ps-3 d-flex">
          <FontAwesomeIcon className="text-primary" icon={faTwitter} size="2x" />
          </div>
          
        </div>
      </section>
      <section className="p-5 d-flex  col-lg-10 ms-5">
        <div className="p-5 container">
          <h2 className="fw-bold ">Mr.Ben</h2>
          <p className="fs-5">Developer</p>
          <hr />
          <p>
            Hello, everyone! I'm Ben, and I'm thrilled to connect with you today
            as a developer. Whether you're a fellow coder, a client, or just
            someone interested in the tech world, I'm excited to share a bit
            about what I do and the passion that drives me.
          </p>
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
