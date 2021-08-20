import AddressCard from './AddressCard';
import classes from './AddressCards.module.css';
function AddressCards(props) {
    return <ul className={classes.cards}>
        {props.restaraunts.map((restaraunt) => (
            <AddressCard 
            key={restaraunt.id}
            id={restaraunt.id}
            hours={restaraunt.hours}
            title={restaraunt.title}
            link={restaraunt.link}
            address={restaraunt.address}
        />
        ))}
    </ul>
}

export default AddressCards;