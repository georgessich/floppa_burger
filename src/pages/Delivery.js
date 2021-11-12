import classes from "./Delivery.module.css";
import Map from '../images/map.png'
function Delivery() {
  return (
    <section className={classes.delivery}>
      <div>
      <p className={classes.delivery__text}>
        Приём заказов осуществляется с <span>10:00 до 23:00</span>. 
      </p>
      <p className={classes.delivery__text}>Время доставки заказа — до
        <span> 60 минут</span>. Время готовности заказов для самовывоза — до <span>45 минут</span>. </p>
      <p className={classes.delivery__text}>
        Вы можете оплатить заказ банковской картой онлайн или при получении.
      </p>
      </div>
      <img src={Map} />
    </section>
  );
}

export default Delivery;
