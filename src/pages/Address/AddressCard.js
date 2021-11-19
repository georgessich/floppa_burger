import classes from "./AddressCard.module.css";
import Vector from "../../images/Vector.png";
function AddressCard(props) {
  return (
    <div className={classes.card}>
      <img className={classes.card__vector} src={Vector} alt="vector" />
      <div  className={classes.card__details}>
        <h3>{props.title}</h3>
        <a className={classes.card__link} href={props.link}>
          {props.address}
        </a>
        <p>{props.hours}</p>
      </div>
    </div>
  );
}

export default AddressCard;
