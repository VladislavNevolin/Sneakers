import React from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

function App() {
  const [items, setItems] = React.useState([]);

  const [cartItems, setCartItems] = React.useState([]);
  
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() =>{fetch('https://65587ef4e93ca47020a961e9.mockapi.io/items')
    .then(res => {
      return res.json();
    }).then(json =>{
      setItems(json)
    });
  }, []);

  const onAddToCart = (obj) =>{
    setCartItems((prev) => [...prev, obj]);
  }

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer items={cartItems} onClose={()=>setCartOpened(false)}/> : null}  

      <Header onClickCart={()=>setCartOpened(true)}/>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">All sneakers</h1>

          <div className="searchBlock d-flex">
            <img src="/img/searchImage.svg" alt="Search" />

            <input placeholder="Searching ..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {     
            items.map((item) => (
              <Card 
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
