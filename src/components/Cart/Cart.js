import React from "react";
import "./Cart.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const cart = props.cart;

  const total = cart.reduce((total, product) => total + product.price, 0);
  //   let total = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     const product = cart[i];
  //     total = total + product.price;
  //   }

  let shipping = 0;

  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const tax = (total / 10).toFixed(2);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);

  return (
    <div className="cart">
      <h5>Order Summary</h5>
      <p>Items Ordered: {cart.length}</p>
      <p>Product Price: {Number(total)}</p>
      <p>
        <small>Shiping cost:{shipping}</small>
      </p>
      <p>
        <small>tax and Vat :{tax}</small>
      </p>
      <p>Total Price:{grandTotal}</p>
      <br />
      <Link to="/review">
        <Button className="main-button btn">Review Oder </Button>
      </Link>
    </div>
  );
};

export default Cart;
