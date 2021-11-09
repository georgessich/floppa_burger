import Meals from '../../components/Meals';
import classes from "./Title.module.css";
function Fries(props) {

    return (
        <div>
        <span className={classes.title}>Картофель</span>
        <Meals mealsId={props.mealsId} />
      </div>
    )
}

export default Fries;