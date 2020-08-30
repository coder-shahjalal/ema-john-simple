import React from "react";
import "./Shop.css";
import { Card, Button } from "react-bootstrap";

const Shop = (props) => {
  const { name, price, seller, img } = props.product;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="">{name}</Card.Title>
          <Card.Text>by: {seller}</Card.Text>
          <Card.Text>${price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Shop;
