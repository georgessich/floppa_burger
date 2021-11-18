import {useState} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classes from './HeaderMenu.module.css';
import Basket from '../../images/basket.png';
import HeaderMenuModal from './HeaderMenuModal/HeaderMenuModal';
function HeaderMenu() {
  const [modalShow, setModalShow] = useState(false);

  function modalShowHandler() {
    setModalShow(true);
  }
  function modalCloseHandler() {
    setModalShow(false);
  }
  const {pathname} = useLocation()
  return (
    pathname !== '/floppa_burger/cart' &&
    <div>
      <nav style={{paddingLeft: '40px'}}>
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
          <button onClick={modalShowHandler} className={classes['header__menu-btn']}><img src={Basket}/></button>
          {modalShow && <HeaderMenuModal onClose={modalCloseHandler}/>}
        </ul>
        
      </nav>
      
    </div>
  );
}

export default HeaderMenu;
