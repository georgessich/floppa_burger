import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <img className={classes.image} src={props.image} alt={props.title} />
      <span className={classes.title}>{props.title}</span>
      <span className={classes.price}>{props.price}</span>
      <div className={classes.extras}>
        <input type="checkbox" id="pickles" name="pickles" />
        <label htmlFor="pickles">Огурчики</label>
        <input type="checkbox" id="cheese" name="cheese" />
        <label htmlFor="cheese">Сыр</label>
        <input type="checkbox" id="jalapeno" name="jalapeno" />
        <label htmlFor="jalapeno">Халапеньо</label>
        <input type="checkbox" id="mushrooms" name="mushrooms" />
        <label htmlFor="mushrooms">Грибы</label>
      </div>
      <div className={classes.controls}>
        <button className={classes.cancel} onClick={props.onClose}>Отмена</button>
        <button className={classes.tocart}>В корзину</button>
      </div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          image={props.image}
          price={props.price}
          onClose={props.onClose}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
