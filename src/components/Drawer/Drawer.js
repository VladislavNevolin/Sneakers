import styles from './Drawer.module.scss';
import Info from '../Info/Info';



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
                        <Info 
                            title="Корзина пустая" 
                            description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ." 
                            image="/img/empty-cart.jpg" 
                        />
                    )}
            </div>
        </div>
    )
}

export default Drawer