import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const priceNum = parseInt(props.price.slice(" ").toString()) * props.amount;
  const price = `${priceNum} руб`;
  return (
    <li className={classes.cartitem}>
        <img className={classes.cartitem__img} src={props.img} alt={props.title}/>
        <h3>{props.title}</h3>
        <span>{props.amount}шт</span>
      <span>{price}</span>
    </li>
  );
};

export default CartItem;
