import React, { Component, useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../src/store/cartContext";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  let price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  };
  return (
    <div className="container">
      <div className="py-2 d-flex justify-content-md-between">
        <div>
          <h3 className="fs-3">{props.name}</h3>
          <div className="fst-italic fw-bold">{props.description}</div>
          <div className="text-danger fw-bold">{price}</div>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCartHandler} />
        </div>
      </div>

      <hr className="text-dark" />
    </div>
  );
};

export default MealItem;
