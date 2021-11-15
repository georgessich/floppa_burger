import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import CartContext from "../../pages/Cart/cart-context";
import DiyModal from "./DiyModal/DiyModal";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  const [roasts, setRoast] = useState([]);
  const [addRoast, setAddRoast] = useState("");
  const [toppings, setToppings] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [supplements, setSupplements] = useState([]);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchSettings = async () => {
      const response = await fetch(
        `https://borger-app-334de-default-rtdb.firebaseio.com/settings.json`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const loadedRoasts = [];
      const loadedToppings = [];
      const loadedSauces = [];
      const responseSettings = (arr, data) => {
        for(const key in data) {
          arr.push({
            id: key,
            title: data[key].title
          })
        }
      }
      responseSettings(loadedRoasts, responseData.roast);
      responseSettings(loadedToppings, responseData.toppings);
      responseSettings(loadedSauces, responseData.sauces);
      
      console.log(loadedRoasts);
      setRoast(loadedRoasts);
      setToppings(loadedToppings);
      setSauces(loadedSauces);
    };
    fetchSettings().catch((error) => {
      setHttpError(error.message);
    });
  }, []);

  const cartCtx = useContext(CartContext);

  let enteredAmount = 0;

  const addToCartHandler = (amount) => {
    amount = ++enteredAmount;
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
      img: props.image,
      supplements: supplements,
      roast: addRoast,
    });
    console.log(cartCtx);
    console.log(addRoast);
  };
  const addTopping = (topping) => {
    if (supplements.length < 5) {
      setSupplements((prevState) => [...prevState, topping]);
    }
    if (supplements.length > 5) {
      setSupplements(supplements);
    }
  };
  return (
    <div className={classes.modal}>
      <div className={classes.modal__left}>
        <span className={classes.modal__title}>{props.title}</span>
        <span className={classes.modal__descr}>{props.descr}</span>

        <div>
          <form>
            <span className={classes["modal__menu-titles"]}>
              Степень прожарки
            </span>
            <div style={{ display: "flex", marginBottom: "27px" }}>
              {roasts.map((roast, i) => (
                <div style={{ marginRight: "15px" }}>
                  <input
                    value={roast.title}
                    id={`radio-r${i}`}
                    type="radio"
                    name="roast"
                    onClick={() => setAddRoast(roast.title)}
                  />
                  <label htmlFor={`radio-r${i}`}>{roast.title}</label>
                </div>
              ))}
            </div>
          </form>
          <div className={classes["modal__topping-btns"]}>
            <span className={classes["modal__menu-titles"]}>
              Добавить ингредиенты {`${supplements.length}/5`}
            </span>
            <div>
              {supplements.map((supplement) => (
                <button className={classes["modal__topping-btn"]}>
                  {supplement}
                </button>
              ))}
            </div>
          </div>
          <div className={classes["modal__topping-container"]}>
            <div className={classes["modal__topping-btns"]}>
              <span className={classes["modal__menu-titles"]}>Топпинги:</span>
              <div>
                {toppings.map((topping) => (
                  <button
                    onClick={() => addTopping(topping.title)}
                    className={classes["modal__topping-btn"]}
                  >
                    {topping.title}
                  </button>
                ))}
              </div>
            </div>
            <div className={classes["modal__topping-btns"]}>
              <span className={classes["modal__menu-titles"]}>Соусы:</span>
              <div>
                {sauces.map((sauce) => (
                  <button className={classes["modal__topping-btn"]}>
                    {sauce.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={classes.modal__image}
        src={props.image}
        alt={props.title}
      />

      <div className={classes.controls}>
        <button className={classes.cancel} onClick={props.onClose}>
          &#10006;
        </button>
        <button
          className={classes.tocart}
          id={props.id}
          onClick={addToCartHandler}
        >
          В корзину!
        </button>
      </div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        props.id === "diy" ? (
          <DiyModal
            title={props.title}
            price={props.price}
            onClose={props.onClose}
            id={props.id}
            descr={props.descr}
          />
        ) : (
          <ModalOverlay
            title={props.title}
            image={props.image}
            price={props.price}
            onClose={props.onClose}
            id={props.id}
            descr={props.descr}
          />
        ),
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
