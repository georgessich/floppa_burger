import classes from "../Modal.module.css";
import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../../pages/Cart/cart-context";
import BunTop from "../../../images/toppings/bun top.png";
import BunBottom from "../../../images/toppings/bun lower.png";
const DiyModal = (props) => {
  const [buns, setBuns] = useState([]);
  const [roasts, setRoast] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [brgrs, setBrgrs] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [layers, setLayers] = useState([]);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchDiySettings = async () => {
      const response = await fetch(
        `https://borger-app-334de-default-rtdb.firebaseio.com/meals/burgers/diy/settings.json`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const loadedBuns = [];
      const loadedRoasts = [];
      const loadedSauces = [];
      const loadedBrgrs = [];
      const loadedToppings = [];
      const responseDiySettings = (arr, data) => {
        for (const key in data) {
          arr.push({
            id: key,
            title: data[key].title,
            img: data[key].img,
          });
        }
      };

      responseDiySettings(loadedBuns, responseData.bun);
      responseDiySettings(loadedRoasts, responseData.roast);
      responseDiySettings(loadedSauces, responseData.sauces);
      responseDiySettings(loadedBrgrs, responseData.brgr);
      responseDiySettings(loadedToppings, responseData.toppings);
      setBuns(loadedBuns);
      setBrgrs(loadedBrgrs);
      setRoast(loadedRoasts);
      setSauces(loadedSauces);
      setToppings(loadedToppings);
      console.log(
        loadedBuns,
        loadedBrgrs,
        loadedRoasts,
        loadedSauces,
        loadedToppings
      );
    };
    fetchDiySettings().catch((error) => {
      setHttpError(error.message);
    });
  }, []);

  const addLayer = (topping) => {
    if (layers.length < 9) {
      setLayers((prevState) => [...prevState, topping]);
    }
    if (layers.length > 9) {
      setLayers(layers);
    }
    console.log(layers);
  };
  return (
    <div className={classes.modal__diy}>
      <div className={classes.modal__left}>
        <span className={classes.modal__title}>{props.title}</span>
        <div className={classes.modal__layers}>
          {layers.map((layer, i) => (
            <div className={classes.modal__layer}>
              <div className={classes["modal__layer-title"]}>Слой №{i + 1}</div>
              <span className={classes["modal__layer-btn"]}>{layer.title}</span>
            </div>
          ))}
          <div className={classes["modal__topping-container"]}>
            <div className={classes["modal__topping-btns"]}>
              <span className={classes["modal__menu-title"]}>Котлеты</span>
              <div>
                {brgrs.map((brgr) => (
                  <button className={classes["modal__topping-btn"]}>
                    {brgr.title}
                  </button>
                ))}
              </div>
            </div>
            <div className={classes["modal__topping-btns"]}>
              <span className={classes["modal__menu-title"]}>Топпинги</span>
              <div>
                {toppings.map((topping) => (
                  <button
                    className={classes["modal__topping-btn"]}
                    onClick={() => addLayer(topping)}
                  >
                    {topping.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.modal__right}>
        <div className={classes["modal__diy-table"]}>
          <img src={BunTop} className={classes["modal__diy-img--buntop"]} />
          <div className={classes['modal__diy-img--toppings']}>
            {layers.map((layer) => (
              <img src={layer.img} />
            ))}
          </div>

          <img
            src={BunBottom}
            className={classes["modal__diy-img--bunbottom"]}
          />
        </div>

        <form>
          <div>
            <span className={classes["modal__menu-titles"]}>Булочка</span>
            <div style={{ display: "flex", marginBottom: "27px" }}>
              {buns.map((bun, i) => (
                <div>
                  <input
                    value={bun.title}
                    id={`radio-bn${i}`}
                    type="radio"
                    name="bun"
                  />
                  <label htmlFor={`radio-bn${i}`}>{bun.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className={classes["modal__menu-titles"]}>
              Степень прожарки
            </span>
            <div style={{ display: "flex", marginBottom: "27px" }}>
              {roasts.map((roast, i) => (
                <div>
                  <input
                    value={roast.title}
                    id={`radio-rst${i}`}
                    type="radio"
                    name="roast"
                  />
                  <label htmlFor={`radio-rst${i}`}>{roast.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className={classes["modal__menu-titles"]}>Соусы</span>
            <div style={{ display: "flex", marginBottom: "27px" }}>
              {sauces.map((sauce, i) => (
                <div>
                  <input
                    value={sauce.title}
                    id={`radio-sau${i}`}
                    type="checkbox"
                    name="sauce"
                  />
                  <label htmlFor={`radio-sauce${i}`}>{sauce.title}</label>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DiyModal;
