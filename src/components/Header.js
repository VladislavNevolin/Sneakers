export default function Header() {
    return(
        <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src='/img/headerImage.svg' alt='sneakers' />

          <div className="headerLeft_headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>

            <p className="opacity-5">The best marketplace for buying sneakers</p>
          </div>
        </div>

        <ul className="headerRight d-flex">
          <li className="headerRight_cart mr-30">
            <img width={18} height={18} src='/img/cartHeader.svg' alt='sneakers' />

            <span>10 euro</span>
          </li>

          <li className="headerRight_info">
            <img width={18} height={18} src='/img/userHeader.svg' alt='sneakers' />
          </li>
        </ul>
      </header>
    )
}