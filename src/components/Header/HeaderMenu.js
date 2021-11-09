import { NavLink } from 'react-router-dom';
import classes from './HeaderMenu.module.css';
function HeaderMenu() {
  return (
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
        </ul>
      </nav>
    </div>
  );
}

export default HeaderMenu;
