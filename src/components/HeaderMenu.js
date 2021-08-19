import { Link } from 'react-router-dom';
import classes from './HeaderMenu.module.css';
function HeaderMenu() {
  return (
    <div>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link className={classes.link}  to="/">
              Бургеры
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/fries">
              Картофель
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/sauces">
              Соусы
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/drinks">
              Напитки
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderMenu;
