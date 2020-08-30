import React, { useState } from "react";
import "./ShopComponent.css";
import AddCart from "../Addcart/AddCart";
import Shop from "../Shop/Shop";

import fakeData from "../../fakeData/android";
import fakeData2 from "../../fakeData/laptop";
import fakeData3 from "../../fakeData/camera";

const ShopComponent = () => {
  const first15 = fakeData.slice(0, 3);
  const [products, setProducts] = useState(first15);
  console.log(first15);
  const first10 = fakeData2.slice(0, 3);
  const [products2, setProductss] = useState(first10);
  console.log(first10);

  return (
    <div className=" shopcomponent ">
      <div className="shop container-fluid d-flex justify-content row">
        <div className="col-md-4">
          {products.map((pd) => (
            <Shop product={pd}></Shop>
          ))}
        </div>
        <div className="col-md-4">
          {products2.map((fd) => (
            <AddCart product2={fd}></AddCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopComponent;
