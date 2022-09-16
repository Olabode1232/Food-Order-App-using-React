import React, { Component } from "react";
import {GrCart} from "react-icons/gr"
import "./headerCartButton.css"

function HeaderButton(props) {
  return <div className="d-flex w-auto h-75 mt-1 rounded-5 cardHolder">
    <span className="px-2 py-2 cart">
     <GrCart />
    </span>
    <span className="px-1 py-2 text-light">your cart</span>
    <span className="text-light px-4 m-2  number">3</span>
  </div>;
}

export default HeaderButton;
 