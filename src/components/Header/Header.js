// import styles from './Header.module.scss'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">


        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src='/img/headerImage.svg' alt='sneakers' />

          <div className="headerLeft_headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>

            <p className="opacity-5">The best marketplace for buying sneakers</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight d-flex">
        <li className="headerRight_cart mr-30 cu-p" onClick={props.onClickCart}>
          <img width={18} height={18} src='/img/cartHeader.svg' alt='sneakers' className="mr-10" />

          <span>10 euro</span>
        </li>

        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src='/img/favoriteHeader.svg' alt='sneakers' />
          </Link>
        </li>

        <li className="headerRight_info">
          <img width={18} height={18} src='/img/userHeader.svg' alt='sneakers' />
        </li>
      </ul>
    </header>
  )
}