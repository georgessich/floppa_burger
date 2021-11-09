import Meals from '../../components/Meals';
import classes from "./Title.module.css";
function Sauces(props) {

    return (
        <div>
        <span className={classes.title}>Соусы</span>
        <Meals mealsId={props.mealsId} />
      </div>
    )
}

export default Sauces;