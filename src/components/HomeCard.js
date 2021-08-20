import classes from './HomeCard.module.css';

function HomeCard(props) {
    return <div className={classes.homecard}>
        <img className={classes.homecard__img} src={props.image} alt={props.title}/>
        <p className={classes.homecard__title}>{props.title}</p>
        <p className={classes.homecard__price}>{props.price}</p>
        <button className={classes.homecard__btn}>В корзину</button>
    </div>
}

export default HomeCard;