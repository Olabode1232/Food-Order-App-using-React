import React, { Component } from 'react';
import "./cart.css"


const CartItem = props => {
    const price = `$${props.price.toFixed(2)}`
    return <div className="container-fluid ">
       <div className="row">
           <div className="d-flex justify-content-between mb-1" >
               <div className="me-5">
           <h2 className="text-dark fs-4">{props.name}</h2>
           <div>
               <span>{price}</span>
               <span className="mx-3 text-dark">x {props.amount}</span>
           </div>
           </div>
           <div className="align-self-center">
               <button onClick={props.onRemove} className="text-danger border-danger mx-1 border-1 ">-</button>
               <button onClick={props.onAdd} className="text-danger border-danger mx-1 border-1">+</button>
           </div>
           </div>
           <hr className="text-dark"/>
       </div>
    </div>
}

export default CartItem