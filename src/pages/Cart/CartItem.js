import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const priceNum = parseInt(props.price.slice(" ").toString()) * props.amount;
  const price = `${priceNum} руб`;
  return (
    <li className={classes.cartitem}>
      <div>
        <img className={classes.cartitem__img} src={props.img} alt={props.title}/>
        <h3>{props.title}</h3>
        <span>{price}</span>
        {props.supplements > 0 && props.supplements.map((supplement) => (
          <span>{supplement}</span>
        ))}
        <span>{props.roast}</span>
      </div>
      <div className={classes.cartitem__controls}>
        <button className={classes.cartitem__button} onClick={props.onRemove}>-</button>
        <span>{props.amount}</span>
        <button className={classes.cartitem__button} onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
