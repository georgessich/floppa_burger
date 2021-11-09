import classes from './HomeCard.module.css';
import { useState } from 'react';
import Modal from '../components/Modal/Modal';
function HomeCard(props) {
    const [modalShow, setModalShow] = useState(false);

    function modalShowHandler() {
        setModalShow(true);
    }
    function modalCloseHandler() {
        setModalShow(false);
    }
    return <div className={classes.homecard}>
        <img className={classes.homecard__img} src={props.image} alt={props.title}/>
        <p className={classes.homecard__title}>{props.title}</p>
        <p className={classes.homecard__price}>{props.price}</p>
        <p className={classes.homecard__descr}>{props.descr}</p>
        {modalShow && <Modal id={props.id} image={props.image} title={props.title} price={props.price} onClose={modalCloseHandler}/>}
        <button className={classes.homecard__btn} onClick={modalShowHandler}>Заказать</button>
    </div>
}

export default HomeCard;