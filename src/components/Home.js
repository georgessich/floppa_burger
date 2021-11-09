import classes from "../pages/Menu/Title.module.css";
import Meals from "./Meals";
function Home(props) {
  return (
    <div>
      <span className={classes.title}>Бургеры</span>
      <Meals mealsId={props.mealsId} />
    </div>
  );
}

export default Home;
