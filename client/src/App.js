import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/catalogue/Home";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/Login/authenticate";
import Login from "./components/Login/Login";
import QuoteSpec from "./components/quote/QuoteSpec";
import newUser from "./components/Login/NewUser";
import Art from "./components/Art/Art";

//well lets just commit something

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav /><NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/shopart" component={Art} />
        <Route exact path="/signUp" component={newUser} />
        <Route path="/quoteSpec/:sku" component={QuoteSpec} />
        <Route path="/list/:id" component={Cart} />
      </div>
    </BrowserRouter> 
  );
}

export default App;