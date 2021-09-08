import HomeCard from "./HomeCard";
import classes from "./HomeCards.module.css";
function HomeCards(props) {
  return (
    <ul className={classes.homecards}>
      {props.burgers.map((burger) => (
        <HomeCard
          key={burger.id}
          id={burger.id}
          image={burger.img}
          title={burger.title}
          price={burger.price}
        />
      ))}
    </ul>
  );
}

export default HomeCards;
