import React, { Component } from "react";

function Cart(props) {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Chicken tender", amount: 2, price: 12.99 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div>
          <span>Total Amount</span>
          <span>35.77</span>
      </div>
      <div>
          <button>Close</button>
          <button>Order </button>
      </div>
    </div>
  );
}

export default Cart;
