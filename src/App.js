import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

const arr =[
  {
    title: 'Men sneakers Nike Blazer Mid Suede',
    price: '150',
    imageURL: '/img/sneakers/greenNike.jpg'
  },
  {
    title: 'Men sneakers Nike Air Max 270',
    price: '170',
    imageURL: '/img/sneakers/airMaxNike.jpg'
  },
  {
    title: 'Men sneakers Puma X Aka Boku Future Rider',
    price: '190',
    imageURL: '/img/sneakers/futureRiderPuma.jpg'
  },

];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">All sneakers</h1>

          <div className="searchBlock d-flex">
            <img src="/img/searchImage.svg" alt="Search" />

            <input placeholder="Searching ..." />
          </div>
        </div>

        <div className="d-flex">
          {     
            arr.map((obj) => (
              <Card 
                title={obj.title} 

                price={obj.price} 

                imageURL={obj.imageURL}

                onClick={() => console.log(obj)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
