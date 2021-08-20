import classes from './Delivery.module.css'

function Delivery(){
    return (
        <section className={classes.delivery}>
            <h2>Доставка и оплата</h2>

            <p>Приём заказов осуществляется с 10:00 до 23:00.
            Время доставки заказа — от 30 минут.
            </p>
            <p>Вы можете оплатить заказ тремя способами:</p>
            <ul>
                <li>Оплата наличными при получении</li>
                <li>Банковской картой при получении</li>
                <li>Банковской картой онлайн
                </li>
            </ul>
        </section>
    )
}

export default Delivery;