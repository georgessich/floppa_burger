import classes from "../Modal.module.css";
import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../../pages/Cart/cart-context";
import bunTop from '../../../images/toppings/Новая папка/bun top.png'
import bunBot from '../../../images/toppings/Новая папка/bun lower.png'
const DiyModal = (props) => {
  const bunStart = {
    title: 'Зерновая',
    top: bunTop,
    bottom: bunBot
  }
  const [buns, setBuns] = useState([]);
  const [roasts, setRoast] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [brgrs, setBrgrs] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [layers, setLayers] = useState([]);
  const [httpError, setHttpError] = useState();
  const [choosePatty, setChoosePatty] = useState();
  const [chooseBun, setChooseBun] = useState(bunStart);
  const [chooseRoast, setChooseRoast] = useState();
  const [chooseSauce, setChooseSauce] = useState([]);
  const [price, setPrice] = useState('159р');

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
            price: data[key].price,
            bottom: data[key].bottom,
            top: data[key].top
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
        loadedBuns[0],
        loadedBrgrs,
        loadedRoasts,
        loadedSauces,
        loadedToppings
      );
      let sums = layers.map((layer) => (
        parseInt(layer.price)
      ))
      let totalSum = sums.reduce((acc, num) => acc + num, 0);
      setPrice(159 + totalSum);
    };
    fetchDiySettings().catch((error) => {
      setHttpError(error.message);
    });
  }, [layers]);
  const cartCtx = useContext(CartContext);

  let enteredAmount = 0;
  
  const addToCartHandler = (amount) => {
    amount = ++enteredAmount;
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: `${parseInt(price.toString())}руб`,
      img: props.image,
      bun: chooseBun,
      patty: choosePatty, 
      roast: chooseRoast,
      supplements: layers,

    });
    console.log(cartCtx);
  };
  
  const addLayer = (topping) => {
    if (layers.length < 9) {
      setLayers((prevState) => [...prevState, topping]);
    }
    if (layers.length > 9) {
      setLayers(layers);
    }
  };
  const deleteLayer = (index) => {
    setLayers(prevState => prevState.filter((layer, i) => 
      i !== index,
    ))
  }
  return (
    <div className={classes.modal__diy}>

        <span className={classes['modal__diy-title']}>{props.title}</span>
        <div className={classes.modal__layers}>
          {layers.map((layer, i) => (
            <div className={classes.modal__layer}>
              <div className={classes["modal__layer-title"]}>Слой №{i + 1}</div>
              <span className={classes["modal__layer-egg"]}>{layer.title}</span>
              <button className={classes['modal__layer-btn']} onClick={() => deleteLayer(i)}>&#10006;</button>
            </div>
          ))}
          <div className={classes["modal__topping-container"]}>
            <div className={classes["modal__topping-btns"]}>
              <span className={classes["modal__menu-title"]}>Котлеты</span>
              <div>
                {brgrs.map((brgr) => (
                  <button onClick={() => addLayer(brgr)} className={classes["modal__topping-btn"]}>
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
      
        <div className={classes["modal__diy-table"]}>
          <img src={chooseBun.top} className={classes["modal__diy-img--buntop"]} />
          <div className={classes['modal__diy-img--toppings']}>
            {layers.map((layer) => (
              <img src={layer.img} />
            ))}
           
          </div>
          <img className={classes['modal__diy-img--patty']}/>
          <img
            src={chooseBun.bottom}
            className={classes["modal__diy-img--bunbottom"]}
          />
        </div>

        <form className={classes['modal__diy-form']}> 
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
                    onClick={() => setChooseBun(bun)}
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
                    onClick={() => {setChooseRoast(roast.title)}}
                  />
                  <label htmlFor={`radio-rst${i}`}>{roast.title}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className={classes["modal__menu-titles"]}>Соусы</span>
            <div style={{ display: "flex", marginBottom: "27px", flexWrap:'wrap'}}>
              {sauces.map((sauce, i) => (
                <div>
                  <input
                    value={sauce.title}
                    id={`radio-sau${i}`}
                    type="checkbox"
                    name="sauce"
                    onClick={() => setChooseSauce(sauce.title)}
                  />
                  <label htmlFor={`radio-sauce${i}`}>{sauce.title}</label>
                </div>
              ))}
            </div>
          </div>
        </form>
      <div className={classes.diy__controls}>
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
        <span className={classes['modal__diy--price']}>{price}р</span>
      </div>
    </div>
  );
};

export default DiyModal;
