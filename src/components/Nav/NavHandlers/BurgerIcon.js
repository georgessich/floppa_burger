import classes from '../../Header/Header.module.css';
const BurgerIcon = (props) => {
  return (
    <svg
    className={classes.header__burger}
    onClick={() => props.clickIcon()}
    
      width="32"
      height="20"
      viewBox="0 0 32 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="3.57146" fill="white" />
      <rect y="8.21436" width="32" height="3.57146" fill="white" />
      <rect y="16.4287" width="32" height="3.57146" fill="white" />
    </svg>
  );
};

export default BurgerIcon;