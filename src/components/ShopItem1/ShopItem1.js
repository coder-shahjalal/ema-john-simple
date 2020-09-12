import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import firebaseConfig from "../firebaseConfig";
// import * as firebase from "firebase/app";
// import "firebase/auth";

// /firebase setting

// firebase.initializeApp(firebaseConfig);

const ShopItem1 = (props) => {
  // console.log(props);
  // const provider = new firebase.auth.GoogleAuthProvider();
  // const handleSignIn = () => {
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then((res) => {
  //       const { displayName } = res.user;
  //       console.log(res);
  //     });
  // }; // /firebase setting

  const { name, price, seller, img, key } = props.product;

  return (
    <div>
      <Card className="card-style" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="font-italic font-weight-normal">
            <Link to={"/product/" + key}>{name.substring(0, 15)}....</Link>
          </Card.Title>
          <Card.Text>by: {seller}</Card.Text>
          <Card.Text>${price}</Card.Text>
          {props.showAddToCart && (
            <Button
              variant="primary"
              onClick={() => props.handleAddProduct(props.product)}
            >
              Go somewhere
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShopItem1;
