import React, { Component } from "react";

const Input = React.forwardRef((props, ref) => {
    return <div>
        <label htmlFor={props.input.id} className="px-2 fw-bolder">{props.label}</label>
        <input ref={ref} {...props.input} className="text-center"/>
    </div>
});

export default Input
