import styles from './Drawer.module.scss'

function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">
            <div className={styles.drawer}>
                <h2 className="d-flex justify-between mb-30">Shopping Cart
                    <img className={styles.removeBtn} src='/img/btnRemove.svg' alt='Close Button' onClick={onClose} />
                </h2>

                {items.length > 0 ?
                    (
                        <><div className={styles.items}>
                            {items.map((obj) => (
                                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                    <div className="cartItemImg" style={{ backgroundImage: `url(${obj.imageURL})` }}></div>

                                    <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>

                                        <b>{obj.price} euro</b>
                                    </div>
                                    
                                    <img onClick={() => 
                                        // console.log(obj.id)}
                                        onRemove(obj.id)}
                                         className={styles.removeBtn} src='/img/btnRemove.svg' alt='Remove' />
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                                <ul>
                                    <li>
                                        <span>Total:</span>

                                        <div></div>

                                        <b>315 euro</b>
                                    </li>

                                    <li>
                                        <span>Tax 5%:</span>

                                        <div></div>

                                        <b>15,75 euro</b>
                                    </li>
                                </ul>

                                <button className="greenButton">Place an order<img src='/img/arrow.svg' alt='arrow' /></button>
                            </div></>
                    ) : (
                        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                            <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />

                            <h2>Корзина пустая</h2>

                            <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>

                            <button onClick={onClose} className="greenButton">
                                <img src="/img/arrow.svg" alt="Arrow" />

                                Вернуться назад
                            </button>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Drawer