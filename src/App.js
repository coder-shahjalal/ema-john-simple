import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProductArea from "./components/ProductArea/ProductArea";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/Shop">
            <ProductArea></ProductArea>
          </Route>

          <Route path="/Review">
            <Review></Review>
          </Route>
          <Route path="/Inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
            <ProductArea></ProductArea>
          </Route>
          <Route to={"/:product/productKey"}>
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <firebaseConfig></firebaseConfig>
    </div>
  );
}

export default App;
