import classes from './Header.module.css';
import logo from './header_logo.png'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className={classes.header}>
      <nav>
        <ul className={classes.header__menu_list}>

          <li>
          <Link className={classes.header__menu_link} to='/floppa_burger'><img src={logo} className={classes.header__logo} alt='logo'/></Link>
          
          </li>
          <li>
            <Link className={classes.header__menu_link} to='/floppa_burger/delivery'>Доставка и оплата</Link>
          </li>
          <li>
            <Link className={classes.header__menu_link} to='/floppa_burger/address'>Заведения</Link>
          </li>
          <li>
            <Link className={classes.header__menu_link} to='/floppa_burger/promo'>Акции</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
