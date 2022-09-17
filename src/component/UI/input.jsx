import React, { Component } from "react";

function Input(props) {
    return <div>
        <label htmlFor={props.input.id} className="px-2 fw-bolder">{props.label}</label>
        <input {...props.input} className="text-center"/>
    </div>
}

export default Input
