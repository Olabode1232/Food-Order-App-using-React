import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import "./modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick ={props.onHideCart}/>;
};
const ModalOverLay = (props) => {
  return (
    <div className="content">
      <div className=""> {props.children}</div>
    </div>
  );
};
const portalPlacement = document.getElementById("overlays");
// below is the general return. Note,
//if you are using react portal you have to import ReacrDom from "react-dom"
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalPlacement)}
      {ReactDom.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalPlacement
      )}
    </Fragment>
  );
};

export default Modal;

// https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a
