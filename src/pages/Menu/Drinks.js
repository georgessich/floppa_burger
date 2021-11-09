import Meals from "../../components/Meals";
import classes from "./Title.module.css";
function Drinks(props) {
  return (
    <div>
      <span  className={classes.title}>Напитки</span>
      <Meals mealsId={props.mealsId} />
    </div>
  );
}

export default Drinks;
