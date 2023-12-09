import styles from './Card.module.scss'

export default function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heartInactive.svg" alt="Grey Heart" />
            </div>

            <img width={133} height={112} src={props.imageURL} alt='greenNike' />

            <h5>
                {
                    props.title
                }
            </h5>

            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price:</span>

                    <b>
                        {
                            props.price
                        } euro
                    </b>
                </div>

                <button className="button" onClick={props.onClick}>
                    <img width={11} height={11} src='/img/cardSelectorPlus.svg' alt='Plus' />
                </button>
            </div>
        </div>
    )
}



