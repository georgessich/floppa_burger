import { useRef } from "react";
import classes from "./CartForm.module.css";


const CartForm = (props) => {
 
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const streetInputRef = useRef();
  const housenumInputRef = useRef();
  const housingInputRef = useRef();
  const appartmentInputRef = useRef();
  const floorInputRef = useRef();
  const commentInputRef = useRef();
  const cardnumInputRef = useRef();
  const cardnameInputRef = useRef();
  const expireInputRef = useRef();
  const cvvInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredHousenum = housenumInputRef.current.value;
    const enteredHousing = housingInputRef.current.value;
    const enteredAppartment = appartmentInputRef.current.value;
    const enteredFloor = floorInputRef.current.value;
    const enteredComment = commentInputRef.current.value;
    const enteredCardname = cardnameInputRef.current.value;
    const enteredCardnum = cardnumInputRef.current.value;
    const enteredExpire = expireInputRef.current.value;
    const enteredCvv = cvvInputRef.current.value;

    props.onConfirm({
      name: enteredName,
      phone: enteredPhone,
      street: enteredStreet,
      housenum: enteredHousenum,
      housing: enteredHousing,
      appartment: enteredAppartment,
      floor: enteredFloor,
      comment: enteredComment,
      cardname: enteredCardname,
      cardnum: enteredCardnum,
      expire: enteredExpire,
      cvv: enteredCvv
    });
  };

  return (
    <form className={classes.cartform} onSubmit={submitHandler}>
      <label className={classes["cartform__name-label"]} htmlFor="name">
        Имя
      </label>
      <input
        className={classes["cartform__name-input"]}
        type="text"
        id="name"
        ref={nameInputRef}
        required
      />
  
      <label className={classes["cartform__phone-label"]} htmlFor="phone">
        Номер телефона
      </label>
      <input
        className={classes["cartform__phone-input"]}
        type="tel"
        id="phone"
        ref={phoneInputRef}
        required
      />


      <div className={classes["cartform__del"]}>
        <span>Доставка:</span>
        <input type="radio" id="del" name="del" checked />
        <label htmlFor="del">Курьер</label>
        <input type="radio" id="del" name="del" />
        <label htmlFor="del">Самовывоз</label>
      </div>
      <label className={classes["cartform__street-label"]} htmlFor="street">
        Улица
      </label>
      <input
        className={classes["cartform__street-input"]}
        type="text"
        id="street"
        ref={streetInputRef}
        required
      />
    

      <label className={classes["cartform__housenum-label"]} htmlFor="housenum">
        Дом
      </label>
      <input
        className={classes["cartform__housenum-input"]}
        type="text"
        id="housenum"
        ref={housenumInputRef}
        required
      />
    
      <label className={classes["cartform__housing-label"]} htmlFor="housing">
        Подъезд
      </label>
      <input
        className={classes["cartform__housing-input"]}
        type="text"
        id="housing"
        ref={housingInputRef}
      />

      <label
        className={classes["cartform__appartment-label"]}
        htmlFor="appartment"
      >
        Квартира
      </label>
      <input
        className={classes["cartform__appartment-input"]}
        type="text"
        id="appartment"
        ref={appartmentInputRef}
      />

      <label className={classes["cartform__floor-label"]} htmlFor="floor">
        Этаж
      </label>
      <input
        className={classes["cartform__floor-input"]}
        type="text"
        id="floor"
        ref={floorInputRef}
      />

      <label className={classes["cartform__comment-label"]}>Комментарий</label>
      <textarea ref={commentInputRef} className={classes["cartform__comment-textarea"]} rows="5" />
      <div className={classes["cartform__pay"]}>
        <span>Оплата:</span>
        <input type="radio" id="pay" name="pay" checked />
        <label htmlFor="pay">Онлайн</label>
        <input type="radio" id="pay" name="pay" />
        <label htmlFor="pay">Курьер</label>
      </div>
      <label className={classes["cartfrom__cardnum-label"]} htmlFor="cardnum">
        Номер карты
      </label>
      <input
        className={classes["cartfrom__cardnum-input"]}
        type="text"
        id="cardnum"
        name="cardnum"
        ref={cardnumInputRef}
      />
      <label className={classes["cartfrom__cardname-label"]} htmlFor="cardname">
        Имя держателя
      </label>
      <input
        className={classes["cartfrom__cardname-input"]}
        type="text"
        id="cardname"
        name="cardname"
        ref={cardnameInputRef}
      />

      <label className={classes["cartfrom__expire-label"]} htmlFor="expire">
        Срок действия
      </label>
      <input
        className={classes["cartfrom__expire-input"]}
        type="text"
        id="expire"
        name="expire"
        ref={expireInputRef}
      />
      <label className={classes["cartfrom__cvv-label"]} htmlFor="cvv">
        CVV
      </label>
      <input
        className={classes["cartfrom__cvv-input"]}
        type="text"
        id="cvv"
        name="cvv"
        ref={cvvInputRef}
      />
      <button className={classes["cartform__btn"]}>Оплатить</button>
    </form>
  );
};

export default CartForm;
