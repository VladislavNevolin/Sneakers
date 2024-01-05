import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss'
 
export default function Card({ onPlus, imageURL, title, price, id, added=false, loading=false }) {
    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState();

    const onClickPlus = () => {
        onPlus({ id, title, imageURL, price  });
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        
        <div className={styles.card}>
            {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (<>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src={isFavorite ? '/img/heartActive.svg' : '/img/heartInactive.svg'} alt="Grey Heart" />
            </div>

            <img width="100%" height={135} src={imageURL} alt='greenNike' />

            <h5>{title}</h5>

            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price:</span>

                    <b>{price} euro</b>
                </div>

                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btnPlusChecked.svg' : '/img/btnPlus.svg'} alt='Plus' />
            </div>
            </>)}
        </div>
    )
}



