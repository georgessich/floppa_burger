import {useState, useContext} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CartContext from '../../pages/Cart/cart-context';
import classes from './HeaderMenu.module.css';
import Basket from '../../images/basket.png';
import HeaderMenuModal from './HeaderMenuModal/HeaderMenuModal';
function HeaderMenu() {
  const [modalShow, setModalShow] = useState(false);

  function modalShowHandler() {
    if(modalShow === false) {
      setModalShow(true);
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
      setModalShow(false)
    }
    
  }
  function modalCloseHandler() {
    setModalShow(false);
  }
  const {pathname} = useLocation()
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    pathname !== '/floppa_burger/cart' &&
    <div style={{alignSelf: 'center', width:'100%'}}>
      <nav className={classes['header__menu-nav']}>
        <ul className={classes.list}>
          <li>
            <NavLink className={classes.link} activeClassName={classes.linkActive} to="/floppa_burger/" exact
            >
              Бургеры
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.link} activeClassName={classes.linkActive} to="/floppa_burger/fries">
              Картофель
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.link} activeClassName={classes.linkActive} to="/floppa_burger/sauces">
              Соусы
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.link} activeClassName={classes.linkActive} to="/floppa_burger/drinks">
              Напитки
            </NavLink>
          </li>
          <button onClick={modalShowHandler} className={classes['header__menu-btn']}><img src={Basket}/><span className={classes['header__menu-btn--num']}>{numberOfCartItems}</span></button>
          {modalShow && <HeaderMenuModal onClose={modalCloseHandler}/>}
        </ul>
        
      </nav>
      
    </div>
  );
}

export default HeaderMenu;
