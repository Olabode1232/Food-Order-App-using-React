import React, { Component, useContext } from "react";
import Modal from "../UI/modal";
import CartContext from "../../store/cartContext";
import CartItem from "./cartItem";
import "./cart.css";
import "../UI/modal.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
 
  const removeItemHandler = id => {}
  const addItemHandler = item => {
    cartCtx.addItem(item)
  }
  const cartItems = (
    <ul className="list-unstyled text-danger ">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={removeItemHandler.bind(null, item.id)} 
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 bg-light rounded-3 mb-2  cartHolder">
            {" "}
            {cartItems}
            <div className="d-flex justify-content-between ">
              <span className="fw-bolder fs-5">Total Amount</span>
              <span className="fw-bolder">35.77</span>
            </div>
            <div className="d-flex justify-content-end mb-2">
              <button
                className="btn-outline rounded-4 px-3 mx-1 text-danger border-danger"
                onClick={props.onHideCart}
              >
                Close
              </button>
              {hasItems && (
                <button className="btn-warning text-light rounded-4 bg-danger px-3 mx-1 border-0">
                  Order{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
