import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/catalogue/Home";
import Login from "./components/login/Login";
import Cart from "./components/cart/Cart.js";
import QuoteSpec from "./components/quote/QuoteSpec";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Cart" component={Cart} />
        <Route path="/quoteSpec/:sku" component={QuoteSpec} />
      </div>
    </BrowserRouter>
  );
}

export default App;