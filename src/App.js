import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import ShopComponent from "./components/ShopComponent/ShopComponent";

function App() {
  return (
    <div>
      <Header></Header>

      <ShopComponent></ShopComponent>
    </div>
  );
}

export default App;
