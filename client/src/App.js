import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/catalogue/Home";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart.js";
import Quote from "./components/quote/Quote";
import QuoteSpec from "./components/quote/QuoteSpec";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Quote" component={Quote} />
        <Route path="/QuoteSpec/:sku" component={QuoteSpec} />
      </div>
    </BrowserRouter>
  );
}

export default App;