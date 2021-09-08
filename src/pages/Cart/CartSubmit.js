import React from "react";
import classes from "./CartSubmit.module.css";
const CartSubmit = () => {
  return (
    <React.Fragment>
      <div className={classes.cartsubmit}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="192"
          height="192"
          viewBox="0 0 24 24"
          fill="green"
        >
          <path d="M21.855 10.303c.086.554.145 1.118.145 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.348 0 4.518.741 6.304 1.993l-1.421 1.457c-1.408-.913-3.083-1.45-4.883-1.45-4.963 0-9 4.038-9 9s4.037 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.865-1.902zm-.951-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z" />
        </svg>
        <p className={classes.message}>Заказ успешно принят!</p>
      </div>
    </React.Fragment>
  );
};

export default CartSubmit;
