import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between">
      <Link to="/Home">
        <img
          className="homeimg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouu27VFkdx6CTebpp71YRhZ7Y8tfxBSx2Lg&usqp=CAU"
          alt="home"
        />
      </Link>
      <div>
        <Link to="/services">
          <span>services</span>
        </Link>
        <Link to="/Product">
          <span>Product</span>
        </Link>
        <Link to="/About">
          <span>About</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
