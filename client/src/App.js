import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/catalogue/Home";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart.js";
import QuoteSpec from "./components/Quote/QuoteSpec";
import newUser from "./components/Login/NewUser";




function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/signUp" component={newUser} />
        <Route path="/quoteSpec/:sku" component={QuoteSpec} />
      </div>
    </BrowserRouter>
  );
}

export default App;