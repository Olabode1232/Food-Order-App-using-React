import React, { Component, useState } from "react";
import Header from "./component/Layout/header";
import Meals from "./component/Meals/meals";
import Cart from "../src/component/Cart/cart";
import CartProvider from "./store/cartProvider"
import "./App.css";

function App(props) {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true)
  }
  const hideCartHandler = () => {
    setShowCart(false)
  }
  return (
    <CartProvider>
      <div className="container-fluid  appHolder">
       {showCart && <Cart  onHideCart={hideCartHandler}/>}
        <Header onShowCart={showCartHandler} />
        <Meals />
      </div>
    </CartProvider>
  );
}

export default App;
