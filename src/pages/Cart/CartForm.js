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

  const nameClasses = `${classes.inputs} ${
      formInputsValidaty.name ? '' : classes.invalid
  }`;
  const phoneClasses = `${classes.inputs} ${
    formInputsValidaty.phone ? '' : classes.invalid
}`;
const streetClasses = `${classes.inputs} ${
    formInputsValidaty.street ? '' : classes.invalid
}`;
const housenumClasses = `${classes.inputs} ${
    formInputsValidaty.housenum ? '' : classes.invalid
}`;

  return (
    <form className={classes.cartform} onSubmit={submitHandler}>
      <h3>Оформление заказа</h3>
      <div className={nameClasses}>
        <label htmlFor="name">Имя</label>
        <input type="text" id="name" ref={nameInputRef}/>
        {!formInputsValidaty.name && <p className={classes.errormessage}>Пожалуйста, введите ваше имя</p>}
      </div>
      <div className={phoneClasses}>
        <label htmlFor="phone">Номер телефона</label>
        <input type="tel" id="phone" ref={phoneInputRef}/>
        {!formInputsValidaty.phone && <p className={classes.errormessage}>Пожалуйста, введите корректный номер телефона</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Улица</label>
        <input type="text" id="street" ref={streetInputRef}/>
        {!formInputsValidaty.street && <p className={classes.errormessage}>Пожалуйста, введите название улицы</p>}
      </div>
      <div className={housenumClasses}>
        <label htmlFor="housenum">Дом</label>
        <input type="text" id="housenum" ref={housenumInputRef}/>
        {!formInputsValidaty.housenum && <p className={classes.errormessage}>Пожалуйста, введите номер дома</p>}
      </div>
      <div className={classes.inputs}>
        <label htmlFor="housing">Корпус</label>
        <input type="text" id="housing" ref={housingInputRef}/>
      </div>
      <div className={classes.inputs}>
        <label htmlFor="appartment">Квартира</label>
        <input type="text" id="appartment" ref={appartmentInputRef}/>
      </div>

      <button>Оформить заказ</button>
    </form>
  );
};

export default CartForm;
