import { useContext, useState } from "react";
import CartContext from "./cart-context";
import CartItem from "./CartItem";
import CartForm from './CartForm';
import CartSubmit from './CartSubmit';
import CartEmpty from './CartEmpty';
import classes from './Cart.module.css';
const Cart = () => {
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const submitOrderHandler = async (userData) => {
    await fetch ('https://borger-app-334de-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      })
    });
    setDidSubmit(true);
    cartCtx.clearCart();
  }
  let sums = cartCtx.items.map(
    (item) => parseInt(item.price.slice(" ").toString()) * item.amount
  );
  let totalSum = sums.reduce((acc, num) => acc + num, 0);
  const cartItems = (
    <div>
      <ul  className={classes['cart__items']} style={{paddingRight:'0'}}>
          {cartCtx.items.map((item) => (
              <CartItem key={item.id} 
              title={item.title}
              price={item.price}
              img={item.img}
              amount={item.amount}
              supplements={item.supplements}
              roast={item.roast}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
              />
          ))}
          <div className={classes['cart__totalsum']}><span>К оплате</span> {totalSum}руб</div>
      </ul>
     
      </div>
  )
  return <div className={classes.cart}>
     {cartCtx.items.length === 0 && !didSubmit && <CartEmpty />}
      {cartCtx.items.length > 0 && !didSubmit && (<div><CartForm onConfirm={submitOrderHandler}/> <div className={classes['cart__header']}>
        <span className={classes['cart__header-title--form']}>Оформление заказа</span>
        <span className={classes['cart__header-title--compose']}>Состав заказа:</span>
      </div> <div>{cartItems}</div></div>)}
      
      {didSubmit && <CartSubmit />}
     
     
  </div>;
};

export default Cart;
