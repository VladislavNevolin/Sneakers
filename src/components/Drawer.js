export default function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Shopping Cart
                    <img className="removeBtn" src='/img/btnRemove.svg' alt='Remove' />
                </h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <img className="mr-20" width={70} height={70} src='/img/sneakers/greenNike.jpg' alt='greenNike' />

                        <div className="mr-20 flex">
                            <p className="mb-5">Men sneakers Nike Blazer Mid Suede</p>

                            <b>150 euro</b>
                        </div>

                        <img className="removeBtn" src='/img/btnRemove.svg' alt='Remove' />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <img className="mr-20" width={70} height={70} src='/img/sneakers/greenNike.jpg' alt='greenNike' />

                        <div className="mr-20 flex">
                            <p className="mb-5">Men sneakers Nike Blazer Mid Suede</p>

                            <b>150 euro</b>
                        </div>

                        <img className="removeBtn" src='/img/btnRemove.svg' alt='Remove' />
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul >
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
                </div>
            </div>
        </div>
    )
}