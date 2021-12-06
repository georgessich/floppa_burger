import { Link } from "react-router-dom";
import classes from '../Header/Header.module.css';


const Nav = (props) => {
    return (
        <ul className={classes.header__menu_list}>

         
          <li className={classes['header__menu-item']} onClick={() => props.isMobile && props.closeMobileNav()}>
            <Link className={classes.header__menu_link} to='/floppa_burger/delivery'>Доставка и оплата</Link>
          </li>
          <li className={classes['header__menu-item']} onClick={() => props.isMobile && props.closeMobileNav()}>
            <Link className={classes.header__menu_link} to='/floppa_burger/address'>Заведения</Link>
          </li>
          <li className={classes['header__menu-item']} onClick={() => props.isMobile && props.closeMobileNav()}>
            <Link className={classes.header__menu_link} to='/floppa_burger/about'>О компании</Link>
          </li>
        </ul>
    )
}

export default Nav;