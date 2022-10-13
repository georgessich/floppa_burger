import classes from "./HeaderMenuModal.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../pages/Cart/cart-context";
const HeaderMenuOverlay = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  let sums = cartCtx.items.map(
    (item) => parseInt(item.price.slice(" ").toString()) * item.amount
  );
  let totalSum = sums.reduce((acc, num) => acc + num, 0);
  
  return (
    <div className={classes["header__menu-overlay"]}>
      <div className={classes["header__modal-grid"]}>
        <span className={classes["header__modal-titles--basket"]}>Корзина</span>
        <span className={classes["header__modal-titles--dish"]}>Блюдо</span>
        <span className={classes["header__modal-titles--quantity"]}>
          Количество
        </span>
        <span className={classes["header__modal-titles--price"]}>
          Стоимость
        </span>
      </div>
      <div className={classes['header__modal-grid--container']} style={{marginBottom: "140px"}}>
        {cartCtx.items.map((item) => (
          <div className={classes["header__modal-grid--items"]}>
            <img
              src={item.img}
              className={classes["header__modal-grid--img"]}
            />
            <span className={classes["header__modal-grid--title"]}>
                {item.title}
              </span>
            <span className={classes["header__modal-grid--supplements"]}>
              
              <span className={classes["header__modal-grid--roast"]}>
                {item.roast}
              </span>
              <div
                style={{
                  display: "flex",
                  paddingLeft: "10px",
                  flexWrap: "wrap",
                }}
              >
                {item.supplements?.map((supplement) => (
                  <span className={classes["header__modal-grid--topping"]}>
                    {typeof supplement === "string"
                      ? supplement
                      : supplement.title}
                  </span>
                ))}
              </div>
            </span>
            <span className={classes["header__modal-grid--amount"]}>
              <button
                style={{ marginRight: "38px" }}
                className={classes["header__modal-grid--counts"]}
                onClick={cartItemRemoveHandler.bind(null, item.id)}
              >
                -
              </button>
              <span style={{ marginRight: "38px" }}>{item.amount}</span>
              <button
                className={classes["header__modal-grid--counts"]}
                onClick={cartItemAddHandler.bind(null, item)}
              >
                +
              </button>
            </span>
            <div className={classes["header__modal-grid--price"]}>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
        <div className={classes["header__modal-controls"]}>
      {(totalSum > 0) && <div className={classes["header__modal-totalsum"]}>
        <span style={{marginRight: '40px'}} className={classes["header__modal-titles--price", "header__modal-titles--price-mob"]} >Итого:</span>
        {totalSum}руб
      </div>}
        <button
          className={classes["header__modal-controls--return"]}
          onClick={props.onClick}
        >
          Продолжить покупки
        </button>
        <button className={classes["header__modal-controls--tocart"]}>
        <Link
          className={classes["header__modal-controls--tocart"]}
          onClick={props.onClick}
          to="/floppa_burger/cart"
        >
          Оформить заказ
        </Link>
        </button>
      </div>
      </div>
    
      
    </div>
  );
};
export default HeaderMenuOverlay;
