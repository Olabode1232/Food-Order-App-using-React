import React, { Component } from "react";
import Input from "../UI/input";

function MealItemForm() {
  return (
    <div className="pt-3">
      <Input
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
    </div>
  );
}

export default MealItemForm;
