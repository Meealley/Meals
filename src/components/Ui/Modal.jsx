import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const BackDrop = (props) => {
  return <div className="backdrop" onClick={props.onHideCart}/>;
};
const Overlay = (props) => {
  return (
    <div className="modal">
      <div className="content"> {props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onHideCart={props.onHideCart}/>, portalElement)}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
