// 1.43.28

import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

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
          <Card />

          <Card />

          <Card />

          <Card />

        </div>
      </div>
    </div>
  );
}

export default App;
