import React, { useState } from "react";
import "./ProductArea.css";
import fakeData from "../../fakeData/android";
import ShopItem1 from "../ShopItem1/ShopItem1";
import Cart from "../Cart/Cart";
import { addToDatabaseCart } from "../../utilities/databaseManager";

const ProductArea = () => {
  const first1 = fakeData.slice(0, 15);
  const [products, setProducts] = useState(first1);
  const [cart, setCart] = useState([]);

  // button event

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDatabaseCart(product.key, 1);
  };

  return (
    <div className="container">
      <div className="productArea ">
        {products.map((pd) => (
          <ShopItem1
            handleAddProduct={handleAddProduct}
            product={pd}
          ></ShopItem1>
        ))}
      </div>

      <div className="addCart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default ProductArea;
