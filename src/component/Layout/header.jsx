import React, { Component, Fragment } from "react";
import "./header.css"
import HeaderButton from "./headerCartButton";

function Header(props) {
   
  return <Fragment>
      <header className=" bg-danger d-flex justify-content-lg-between justify-content-md-between justify-content-sm-between px-5 border-2 ">
          <h1 className="text-light">Order Meal</h1>
          <HeaderButton onShowHeader={props.onShowCart}/>
      </header>
      <div className="image ">
      </div>
  </Fragment>
}

export default Header;
