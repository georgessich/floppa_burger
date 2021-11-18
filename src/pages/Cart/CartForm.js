import { useRef, useState } from "react";
import classes from "./CartForm.module.css";
const emptyValue = (value) => value.trim() === "";
const phoneValue = (value) => value.trim().length === 11;

const CartForm = (props) => {
  const [formInputsValidaty, setFormInputsValidaty] = useState({
    name: true,
    phone: true,
    street: true,
    housenum: true,
    housing: true,
    appartment: true,
  });
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const streetInputRef = useRef();
  const housenumInputRef = useRef();
  const housingInputRef = useRef();
  const appartmentInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredHousenum = housenumInputRef.current.value;
    const enteredHousing = housingInputRef.current.value;
    const enteredAppartment = appartmentInputRef.current.value;

    const enteredNameIsValid = !emptyValue(enteredName);
    const enteredPhoneIsValid = !phoneValue(enteredPhone);
    const enteredStreetIsValid = !emptyValue(enteredStreet);
    const enteredHousenumIsValid = !emptyValue(enteredHousenum);
    const enteredHousingIsValid = !emptyValue(enteredHousing);
    const enteredAppartmentIsValid = !emptyValue(enteredAppartment);

    setFormInputsValidaty({
      name: enteredNameIsValid,
      phone: enteredPhoneIsValid,
      street: enteredStreetIsValid,
      housenum: enteredHousenumIsValid,
      housing: enteredHousingIsValid,
      appartment: enteredAppartmentIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredPhoneIsValid &&
      enteredStreetIsValid &&
      enteredHousenumIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      phone: enteredPhone,
      street: enteredStreet,
      housenum: enteredHousenum,
      housing: enteredHousing,
      appartment: enteredAppartment,
    });
  };

  //   const nameClasses = `${classes.inputs} ${
  //       formInputsValidaty.name ? classes['cartform__name'] : classes.invalid
  //   }`;
  //   const phoneClasses = `${classes.inputs} ${
  //     formInputsValidaty.phone ? classes['cartform__phone'] : classes.invalid
  // }`;
  // const streetClasses = `${classes.inputs} ${
  //     formInputsValidaty.street ? classes['cartform__street'] : classes.invalid
  // }`;
  // const housenumClasses = `${classes.inputs} ${
  //     formInputsValidaty.housenum ? classes['cartform__housenum'] : classes.invalid
  // }`;

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
      />
      {!formInputsValidaty.name && (
        <p className={classes.errormessage}>Пожалуйста, введите ваше имя</p>
      )}

      <label className={classes["cartform__phone-label"]} htmlFor="phone">
        Номер телефона
      </label>
      <input
        className={classes["cartform__phone-input"]}
        type="tel"
        id="phone"
        ref={phoneInputRef}
      />
      {!formInputsValidaty.phone && (
        <p className={classes.errormessage}>
          Пожалуйста, введите корректный номер телефона
        </p>
      )}

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
      />
      {!formInputsValidaty.street && (
        <p className={classes.errormessage}>
          Пожалуйста, введите название улицы
        </p>
      )}

      <label className={classes["cartform__housenum-label"]} htmlFor="housenum">
        Дом
      </label>
      <input
        className={classes["cartform__housenum-input"]}
        type="text"
        id="housenum"
        ref={housenumInputRef}
      />
      {!formInputsValidaty.housenum && (
        <p className={classes.errormessage}>Пожалуйста, введите номер дома</p>
      )}

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
        ref={appartmentInputRef}
      />

      <label className={classes["cartform__comment-label"]}>Комментарий</label>
      <textarea className={classes["cartform__comment-textarea"]} rows="5" />
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
      />
      <label className={classes["cartfrom__cardname-label"]} htmlFor="cardname">
        Имя держателя
      </label>
      <input
        className={classes["cartfrom__cardname-input"]}
        type="text"
        id="cardname"
        name="cardname"
      />

      <label className={classes["cartfrom__expire-label"]} htmlFor="expire">
        Срок действия
      </label>
      <input
        className={classes["cartfrom__expire-input"]}
        type="text"
        id="expire"
        name="expire"
      />
      <label className={classes["cartfrom__cvv-label"]} htmlFor="cvv">
        CVV
      </label>
      <input
        className={classes["cartfrom__cvv-input"]}
        type="text"
        id="cvv"
        name="cvv"
      />
      <button className={classes["cartform__btn"]}>Оплатить</button>
    </form>
  );
};

export default CartForm;
