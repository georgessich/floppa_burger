import classes from "./HomeCard.module.css";
import { useState, useContext, useRef } from "react";
import Modal from "../components/Modal/Modal";
import CartContext from "../pages/Cart/cart-context";
function HomeCard(props) {
  const [modalShow, setModalShow] = useState(false);
  const myRef = useRef(null);
  function modalShowHandler() {
    setModalShow(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  }

  
  function modalCloseHandler() {
    setModalShow(false);
    window.scrollTo({
      behavior: "smooth",
      top: myRef.current.offsetTop,
    });
  }
  const cartCtx = useContext(CartContext);

  let enteredAmount = 0;

  const addToCartHandler = (amount) => {
    amount = ++enteredAmount;
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
      img: props.image,
      supplements: []
    });
    console.log(cartCtx);
  };
  return (
    <div className={classes.homecard} ref={myRef}>
      <img
        className={classes.homecard__img}
        src={props.image}
        alt={props.title}
      />
      <p className={classes.homecard__title}>{props.title}</p>
      <p className={classes.homecard__price}>{props.price}</p>
      <p className={classes.homecard__descr}>{props.descr}</p>
      {(props.id.includes("b") || props.id==="diy") && modalShow && (
        <Modal
        
          descr={props.descr}
          id={props.id}
          image={props.image}
          title={props.title}
          price={props.price}
          onClose={modalCloseHandler}
        />
      )}
      {props.id.includes("b") ? <button className={classes.homecard__btn} onClick={modalShowHandler}>
        Заказать
      </button> : <button className={classes.homecard__btn} onClick={addToCartHandler}>
        Заказать
      </button>}
      {props.id === 'diy' && <button className={classes.homecard__btn} onClick={modalShowHandler}>
        Заказать
      </button>}

    </div>
  );
}

export default HomeCard;
