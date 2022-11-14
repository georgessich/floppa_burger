import classes from "./Header.module.css";
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';
import DeskNav from "../Nav/DeskNav";
import MobileNav from "../Nav/MobileNav";
function Header() {
  return (
    <div className={classes.header}>
          <Link className={classes.header__menu_link} to='/'><img src={logo} className={classes.header__logo} alt='logo'/></Link>
      <div className={classes.header__nav}>
        <DeskNav />
      </div>
      <div className={classes.header__nav}>
        <MobileNav />
      </div>
    </div>
  );
}

export default Header;
