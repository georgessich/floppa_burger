import { Link } from "react-router-dom";
import classes from '../Header/Header.module.css';


const Nav = (props) => {
    return (
        <ul className={classes.header__menu_list}>

         
          <li className={classes['header__menu-item']} onClick={() => props.isMobile && props.closeMobileNav()}>
            <Link className={classes.header__menu_link} to='/delivery'>Доставка и оплата</Link>
          </li>
          <li className={classes['header__menu-item']} onClick={() => props.isMobile && props.closeMobileNav()}>
            <Link className={classes.header__menu_link} to='/address'>Заведения</Link>
          </li>
          <li className={classes['header__menu-item']} onClick={() => props.isMobile && props.closeMobileNav()}>
            <Link className={classes.header__menu_link} to='/about'>О компании</Link>
          </li>
        </ul>
    )
}

export default Nav;