import React, { useState } from "react";
import "./ProductArea.css";
import fakeData from "../../fakeData/android";
import fakeData2 from "../../fakeData/laptop";
import fakeData3 from "../../fakeData/camera";
import ShopIteam2 from "../ShopIteam2/ShopIteam2";
import ShopItem1 from "../ShopItem1/ShopItem1";
import ShopIteam3 from "../ShopIteam3/ShopIteam3";
import AddCartt from "../AddCartt/AddCartt";

const ProductArea = () => {
  const first1 = fakeData.slice(0, 3);
  const [products, setProducts] = useState(first1);
  console.log(first1);
  const first2 = fakeData2.slice(0, 3);
  const [products2, setProductss] = useState(first2);
  console.log(first2);
  const first3 = fakeData3.slice(0, 3);
  const [products3, setProductsss] = useState(first3);
  console.log(first3);
  return (
    <div className=" ProductArea container-fluid d-flex">
      <div className="container-fluid d-flex justify-content row">
        <div className="col-md-4 ">
          {products.map((pd) => (
            <ShopItem1 product={pd}></ShopItem1>
          ))}
        </div>
        <div className="col-md-4 ">
          {products2.map((fd) => (
            <ShopIteam2 product2={fd}></ShopIteam2>
          ))}
        </div>

        <div className="col-md-4 ">
          {products3.map((fd) => (
            <ShopIteam3 product3={fd}></ShopIteam3>
          ))}
        </div>
      </div>
      <AddCartt></AddCartt>
    </div>
  );
};

export default ProductArea;
