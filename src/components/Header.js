import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHockeyPuck,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
        <header style={{ height: "200px " }} className="w-100 bg-dark d-flex">
        <div className=" ms-5 mt-4 text-white">
          <h2 className=" ms-5   mt-4 p-2 logo-font">
            The Sports Store
            <span className="ms-1 ">
              <FontAwesomeIcon style={{ width: "9px" }} icon={faHockeyPuck} />
              <br />
            </span>
          </h2>
          <p className="text-secondary ms-2 ps-5 p-font">Your great choice </p>
        </div>
        <img
          style={{ height: "90px" }}
          className=" img-fluid mt-5 me-5 "
          src={require("../images/logo.png")}
          alt="Logo"
        />

        <div class="w-50 pt-2   container height d-flex justify-content-center mt-5">
          <div class="col-lg-10 col-md-6 col-sm-4">
            <div class="form">
              <input
                type="text"
                class="form-control form-input"
                placeholder="Search your product key ..."
              />
              <span class="left-pan">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </div>
          </div>
          <div className="d-flex w-25 p-2 ms-3 ">
            <img
              style={{ height: "34px" }}
              src={require("../images/Language.png")}
              alt=""
            />
          </div>
        </div>
      </header>

    </div>
  )
}

export default Header