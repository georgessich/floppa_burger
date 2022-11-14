import facebookLogo from "../../images/footer-facebook.png";
import instaLogo from "../../images/footer-insta.png";
import vkLogo from "../../images/footer-vk.png";
import floppaLogo from "../../images/footer-logo.png";
import { Link } from "react-router-dom";
import classes from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Link to="/" className={classes['footer__logo']}><img src={floppaLogo} alt={'footer logo'}/></Link>

      <nav className={classes['footer__menu']}>
        <ul className={classes['footer__item-list']}>
          <li>
            <Link className={classes['footer__item-link']} to="/delivery">Доставка и оплата</Link>
          </li>
          <li>
            <Link className={classes['footer__item-link']} to="/address">Заведения</Link>
          </li>
          <li>
            <Link className={classes['footer__item-link']} to="/about">О компании</Link>
          </li>
        </ul>
        </nav>
        <nav className={classes['footer__social']}>
        <ul className={classes['footer__item-list--social']}>
          <li>
            <a href="#">
              <img src={facebookLogo} alt={"facebook"} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instaLogo} alt={"instagram"} />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={vkLogo} alt={"vk"} />
            </a>
          </li>
        </ul>
        </nav>
      
    </footer>
  );
};

export default Footer;
