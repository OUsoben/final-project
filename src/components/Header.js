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
      
        <nav>
          
        </nav>
      </header>

    </div>
  )
}

export default Header