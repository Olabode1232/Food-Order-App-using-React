import React, { Component, useContext } from "react";
import { GrCart } from "react-icons/gr";
import "./headerCartButton.css";
import CartContext from "../../store/cartContext";

function HeaderButton(props) {
  const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <div
      className="d-flex w-auto h-75 mt-1 rounded-5 cardHolder"
      onClick={props.onShowHeader}
    >
      <span className="px-2 py-2 cart">
        <GrCart />
      </span>
      <span className="px-1 py-2 text-light">your cart</span>
      <span className="text-light px-4 m-2  number">{numberOfCartItem}</span>
    </div>
  );
}

export default HeaderButton;
