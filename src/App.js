// 1.14 №5

import React from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

function App() {
  const [items, setItems] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([]);

  // const [favorites, setFavorites] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState('');

  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://65587ef4e93ca47020a961e9.mockapi.io/items').then((res)=>{
      setItems(res.data)
    });

    axios.get('https://65587ef4e93ca47020a961e9.mockapi.io/cart').then((res)=>{
      setCartItems(res.data)
    })
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://65587ef4e93ca47020a961e9.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://65587ef4e93ca47020a961e9.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };





  const onAddToFavorite = (obj) => {
    axios.post('https://65587ef4e93ca47020a961e9.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/> }

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">{searchValue ? `Search by request: "${searchValue}"` : "All sneakers"}</h1>

          <div className="searchBlock d-flex">
            <img src="/img/searchImage.svg" alt="Search" />

            {searchValue &&
              <img
                className="clear cu-p"
                src='/img/btnRemove.svg'
                alt='Clear'
                onClick={() => setSearchValue('')}
              />
            }

            <input onChange={onChangeSearchValue} value={searchValue} placeholder="Searching ..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            items.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
              <Card
                key={index}

                title={item.title}

                price={item.price}

                imageURL={item.imageURL}

                onFavorite={() => console.log('Добвали в закладки')}

                onPlus={(obj) => onAddToCart(obj)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
