import React from "react";
import { Card, Button } from "react-bootstrap";

const ShopIteam3 = (props) => {
  const { name, price, seller, img } = props.product3;

  return (
    <div>
      <Card className="card-style" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="font-italic font-weight-normal">
            {name.substring(0, 15)}.......
          </Card.Title>
          <Card.Text>by: {seller}</Card.Text>
          <Card.Text>${price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShopIteam3;
