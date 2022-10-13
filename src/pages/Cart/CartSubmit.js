import React from "react";
import classes from "./CartSubmit.module.css";
import {ReactComponent as SubmitIcon} from './submit.svg'
const CartSubmit = () => {
  return (
    <React.Fragment>
      <div className={classes.cartsubmit}>
        <SubmitIcon width="250px" height="250px"/>
        <p className={classes.message}>Заказ успешно принят!</p>
      </div>
    </React.Fragment>
  );
};

export default CartSubmit;
