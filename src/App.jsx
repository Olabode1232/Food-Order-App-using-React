import React, { Component, Fragment, useState } from "react";
import Header from "./component/Layout/header";
import Meals from "./component/Meals/meals";
import Cart from "../src/component/Cart/cart";
import "./App.css";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true)
  }
  const hideCartHandler = () => {
    setShowCart(false)
  }
  return (
    <Fragment>
      <div className="container-fluid  appHolder">
       {showCart && <Cart  onHideCart={hideCartHandler}/>}
        <Header onShowCart={showCartHandler} />
        <Meals />
      </div>
    </Fragment>
  );
}

export default App;
