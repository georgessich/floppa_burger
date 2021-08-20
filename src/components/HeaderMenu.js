import { Link } from 'react-router-dom';
import classes from './HeaderMenu.module.css';
function HeaderMenu() {
  return (
    <div>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link className={classes.link}  to="/floppa_burger/">
              Бургеры
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/floppa_burger/fries">
              Картофель
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/floppa_burger/sauces">
              Соусы
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/floppa_burger/drinks">
              Напитки
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderMenu;
