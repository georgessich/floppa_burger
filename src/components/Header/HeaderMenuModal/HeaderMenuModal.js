import React from "react";
import ReactDOM from "react-dom";
import HeaderMenuOverlay from './HeaderMenuOverlay';
import classes from './HeaderMenuModal.module.css';

const Backdrop = (props) => {
  
  return <div className={classes.backdrop__header} onClick={props.onClick} />;
};

const HeaderMenuModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose}/>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <HeaderMenuOverlay onClick={props.onClose}/>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default HeaderMenuModal;
