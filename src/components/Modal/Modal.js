import React, { useContext } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";
import CartContext from '../../pages/Cart/cart-context';
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  const cartCtx = useContext(CartContext);

  let enteredAmount = 0;


  const addToCartHandler = (amount) => {
    amount = ++enteredAmount;
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
      img: props.image
    });
  };
  return (
    <div className={classes.modal}>
      <img className={classes.image} src={props.image} alt={props.title} />
      <span className={classes.title}>{props.title}</span>
      <span className={classes.price}>{props.price}</span>
      {props.id.includes('b') && (
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
      )}

      <div className={classes.controls}>
        <button className={classes.cancel} onClick={props.onClose}>
          Отмена
        </button>
        <button className={classes.tocart} id={props.id} onClick={addToCartHandler}>В корзину</button>
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
          id={props.id}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
