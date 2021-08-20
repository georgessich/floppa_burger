import classes from './Footer.module.css';
import facebookLogo from './facebook2.svg';
import vkLogo from './vk.svg';
import instagramLogo from './instagram.svg';
function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        
        <nav>
        
          <ul className={classes.footer__list}>
          <p className={classes.footer__text}>Наши Соцсети</p>
            <li>
              <a href="#">
                  <img src={facebookLogo} alt="Facebook"/> 
              </a>
            </li>
            <li>
              <a href="#">
              <img src={vkLogo} alt="VK"/> 
              </a>
            </li>
            <li>
              <a href="#">
              <img src={instagramLogo} alt="Instagram"/> 
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className={classes.footer__text}>©2021, Флоппа Бургер</p>
    </footer>
  );
}

export default Footer;
