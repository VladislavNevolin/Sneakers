import React from 'react'
import styles from './Card.module.scss'
 
export default function Card({ onPlus, onFavorite, imageURL, title, price }) {
    const [isAdded, setIsAdded] = React.useState();
    const [isFavorite, setIsFavorite] = React.useState();

    const onClickPlus = () => {
        onPlus({ title, imageURL, price });
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? '/img/heartActive.svg' : '/img/heartInactive.svg'} alt="Grey Heart" />
            </div>

            <img width={133} height={112} src={imageURL} alt='greenNike' />

            <h5>{title}</h5>

            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price:</span>

                    <b>{price} euro</b>
                </div>

                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btnPlusChecked.svg' : '/img/btnPlus.svg'} alt='Plus' />
            </div>
        </div>
    )
}



