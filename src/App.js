

function App() {
  return (
    <div className="wrapper clear">
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
      <div className="content p-40">
        <h1 className="mb-40">All sneakers</h1>
        <div className="d-flex">
          <div className="card">
            <img width={133} height={112} src='/img/sneakers/greenNike.jpg' alt='greenNike' />
            <h5>Men sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>150 euro</b>
              </div>
              <button className="button">
                <img width={11} height={11} src='/img/cardSelectorPlus.svg' alt='Plus' />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src='/img/sneakers/greenNike.jpg' alt='greenNike' />
            <h5>Men sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>150 euro</b>
              </div>
              <button className="button">
                <img width={11} height={11} src='/img/cardSelectorPlus.svg' alt='Plus' />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src='/img/sneakers/greenNike.jpg' alt='greenNike' />
            <h5>Men sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>150 euro</b>
              </div>
              <button className="button">
                <img width={11} height={11} src='/img/cardSelectorPlus.svg' alt='Plus' />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src='/img/sneakers/greenNike.jpg' alt='greenNike' />
            <h5>Men sneakers Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>150 euro</b>
              </div>
              <button className="button">
                <img width={11} height={11} src='/img/cardSelectorPlus.svg' alt='Plus' />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
