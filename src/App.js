import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ShopComponent from "./components/ProductArea/ProductArea";
import ProductArea from "./components/ProductArea/ProductArea";

function App() {
  return (
    <div>
      <firebaseConfig></firebaseConfig>

      <Header></Header>

      <ProductArea></ProductArea>
    </div>
  );
}

export default App;
