import React from "react";
import { Card, Button } from "react-bootstrap";
import firebaseConfig from "../firebaseConfig";
import * as firebase from "firebase/app";
import "firebase/auth";

// /firebase setting

firebase.initializeApp(firebaseConfig);

const ShopItem1 = (props) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName } = res.user;
        console.log(res);
      });
  }; // /firebase setting

  const { name, price, seller, img } = props.product;

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
          <Button variant="primary" onClick={handleSignIn}>
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShopItem1;
