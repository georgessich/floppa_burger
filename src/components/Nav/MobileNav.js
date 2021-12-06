import { useState } from 'react';
import Nav from './Nav';
import classes from '../Header/Header.module.css';
import BurgerIcon from './NavHandlers/BurgerIcon';
import CloseIcon from './NavHandlers/CloseIcon';

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    const clickIcon = () => {
        setOpen(!open);
    }
    const closeMobileNav = () => setOpen(false);
    return (
        <nav className={classes.MobileNav}>
            {open ? <CloseIcon clickIcon={clickIcon}/> : <BurgerIcon clickIcon={clickIcon} />}
            {open && <Nav isMobile={true} closeMobileNav={closeMobileNav}/>}
        </nav>
        
    )
}

export default MobileNav;