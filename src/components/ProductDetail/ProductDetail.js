import React from "react";
import { useParams } from "react-router";
import fakeData from "../../fakeData";
import ShopItem1 from "../ShopItem1/ShopItem1";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productKey } = useParams();
  const product = fakeData.find((pd) => pd.key === productKey);

  return (
    <div>
      <ShopItem1 showAddToCart={false} product={product}></ShopItem1>
    </div>
  );
};

export default ProductDetail;
