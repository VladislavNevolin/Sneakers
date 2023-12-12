import React from 'react'
import styles from './Card.module.scss'

export default function Card(props) {
    const [isAdded, setIsAdded] = React.useState();

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }
    
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={props.onClickFavorite}>
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

                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btnPlusChecked.svg' : '/img/btnPlus.svg'} alt='Plus' />
            </div>
        </div>
    )
}



