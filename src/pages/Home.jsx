import React from "react";
import Card from "../components/Card/Card";


export default function Home ({ items, searchValue, setSearchValue, onAddToCart, onChangeSearchValue, isLoading}) {

  
  const renderItems =() =>{
    const filteredItems = items.filter(item => 
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={index}

        onFavorite={() => console.log('Добвали в закладки')}

        onPlus={(obj) => onAddToCart(obj)}

        loading={isLoading}

        {...item}
      />
    ))
  }  
  
  
  
  return(
        
        <div className="content p-40">
          
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">{searchValue ? `Search by request: "${searchValue}"` : "All sneakers"} </h1>

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
            renderItems()
          }
        </div>
      </div>
    )
}

