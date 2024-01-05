// 1.14 №5

import React from "react";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";

import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export const AppContext =React.createContext([]);

function App() {
  const [items, setItems] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([]);

  const [favorites, setFavorites] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState('');

  const [cartOpened, setCartOpened] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      // setIsLoading(true); // делается при нескольких загрузках данных, в данном проекте не требуется, т.к. изначальное состояние уже тру( смотри  в const [isLoading, setIsLoading] = React.useState(true);)

      const cartResponce = await axios.get('https://65587ef4e93ca47020a961e9.mockapi.io/cart');  
      
      const itemsResponce = await axios.get('https://65587ef4e93ca47020a961e9.mockapi.io/items');

      setIsLoading(false);

      setCartItems(cartResponce.data);
      
      setItems(itemsResponce.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://65587ef4e93ca47020a961e9.mockapi.io/cart/${obj.id}`);

      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://65587ef4e93ca47020a961e9.mockapi.io/cart', obj);

      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = async (id) => {
    try {
      await axios.delete(`https://65587ef4e93ca47020a961e9.mockapi.io/cart/${id}`);

      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (e) {
      console.log(e)
    }
  };

  const onAddToFavorite = (obj) => {
    axios.post('https://65587ef4e93ca47020a961e9.mockapi.io/cart', obj);

    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  };


  // let sneakers = [
  //   {
  //     "title": "Men sneakers Nike Blazer Mid Suede",
  //     "price": "150",
  //     "imageURL": "/img/sneakers/1.jpg"
  //   },
  //   {
  //     "title": "Men sneakers Nike Air Max 270",
  //     "price": "170",
  //     "imageURL": "/img/sneakers/2.jpg"
  //   },
  //   {
  //     "title": "Men sneakers Nike Blazer Mid Suede",
  //     "price": "190",
  //     "imageURL": "/img/sneakers/3.jpg"
  //   },
  //   {
  //     "title": "Men sneakers Puma X Aka Boku Future Rider",
  //     "price": "250",
  //     "imageURL": "/img/sneakers/4.jpg"
  //   },
  //   {
  //     "title": "Men sneakers Under Armour Curry 8",
  //     "price": "135",
  //     "imageURL": "/img/sneakers/5.jpg"
  //   },
  //   {
  //     "title": "Men sneakers Nike Kyrie 7",
  //     "price": "190",
  //     "imageURL": "/img/sneakers/6.jpg"
  //   },
  //   {
  //     "title": "Men sneakers Nike LeBron XVIII",
  //     "price": "200",
  //     "imageURL": "/img/sneakers/7.jpg"
  //   },
  //   {
  //     "title": "Men sneakers Nike Lebron XVIII Low",
  //     "price": "99",
  //     "imageURL": "/img/sneakers/8.jpg"
  //   },
  //   {
  //     "title": "Men sneakers Nike Kyrie Flytrap IV",
  //     "price": "120",
  //     "imageURL": "/img/sneakers/9.jpg"
  //   }
  // ]

  // localStorage.setItem(sneakers, JSON.stringify(sneakers));

  // sneakers=JSON.parse (localStorage.getItem(sneakers));

  // console.log(typeof sneakers);

  // console.log(sneakers)


  // const [items, setItems] = React.useState(()=>{
  //   const saved = localStorage.getItem(sneakers);
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });

  // const [cartItems, setCartItems] = React.useState([]);

  // // const [favorites, setFavorites] = React.useState([]);

  // const [searchValue, setSearchValue] = React.useState('');

  // const [cartOpened, setCartOpened] = React.useState(false);

  // React.useEffect(() => {
  //   setItems(localStorage.setItem(sneakers, JSON.stringify(sneakers)))

  //   axios.get('https://65587ef4e93ca47020a961e9.mockapi.io/cart').then((res)=>{
  //     setCartItems(res.data)
  //   })
  // }, [sneakers]);

  // const onAddToCart = (obj) => {
  //   axios.post('https://65587ef4e93ca47020a961e9.mockapi.io/cart', obj);
  //   setCartItems((prev) => [...prev, obj]);
  // };

  // const onRemoveItem = (id) => {
  //   axios.delete(`https://65587ef4e93ca47020a961e9.mockapi.io/cart/${id}`);
  //   setCartItems((prev) => prev.filter((item) => item.id !== id));
  // };

  // const onAddToFavorite = (obj) => {
  //   axios.post('https://65587ef4e93ca47020a961e9.mockapi.io/cart', obj);
  //   setCartItems((prev) => [...prev, obj]);
  // };

  // const onChangeSearchValue = (event) => {
  //   setSearchValue(event.target.value)
  // };

  return (
    <AppContext.Provider value={{items, cartItems}}>
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route path="/" exact
          element={<Home

            items={items}

            cartItems={cartItems}

            favorites={favorites}

            searchValue={searchValue}

            setSearchValue={setSearchValue}

            onAddToCart={onAddToCart}

            onChangeSearchValue={onChangeSearchValue}

            onAddToFavorite={onAddToFavorite}

            isLoading={isLoading}
          />}>
        </Route>

        
        <Route path="/favorites" exact element={ <Favorites/> }> </Route>
      </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
