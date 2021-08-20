import classes from "./AddressCard.module.css";

function AddressCard(props) {
  return (
    <div className={classes.card}>
      <h3>{props.title}</h3>
      <a className={classes.card__link} href={props.link}>{props.address}</a>
      <p>{props.hours}</p>
    </div>
  );
}

export default AddressCard;
