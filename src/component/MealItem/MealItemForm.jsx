import React, { Component, useRef, useState } from "react";
import Input from "../UI/input";

function MealItemForm(props) {
  const [isAmountValid, setIsAmountValid] = React.useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("successfully submitted");

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim() === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber)
  };
  const amountInputRef = useRef();
  return (
    <form onSubmit={submitHandler}>
      <div className="pt-3 ">
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button className="bg-danger rounded-4 text-light border-0 px-3 mt-2 ms-5 fw-bold">
          + Add
        </button>
        {!isAmountValid && <p>Please enter amount (1-5).</p>}
      </div>
    </form>
  );
}

export default MealItemForm;
