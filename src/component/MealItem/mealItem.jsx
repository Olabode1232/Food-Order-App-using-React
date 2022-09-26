import React, { Component } from "react";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  let price = `$${props.price.toFixed(2)}`;
  return (
    <div className="container">
      <div className="py-2 d-flex justify-content-md-between">
        <div>
          <h3 className="fs-3">{props.name}</h3>
          <div className="fst-italic fw-bold">{props.description}</div>
          <div className="text-danger fw-bold">{price}</div>
        </div>
        <div>
          <MealItemForm />
        </div>
      </div>

      <hr className="text-dark" />
    </div>
  );
}

export default MealItem;
