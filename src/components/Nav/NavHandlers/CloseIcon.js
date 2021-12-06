import classes from '../../Header/Header.module.css';
const CloseIcon = (props) => {
  return (
    <svg
    className={classes.header__burger}
    onClick={() => props.clickIcon()}
    
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9706 2.00014L2 18.9707"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M2.05483 2.00014L19.0254 18.9707"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default CloseIcon;
