import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/catalogue/Home";
import Cart from "./components/Cart34/Cart";
import NavBar from "./components/Login12/authenticate";
import Login from "./components/Login12/Login";
import QuoteSpec from "./components/Quote/QuoteSpec";
import newUser from "./components/Login12/NewUser";
import Art from "./components/Art/Art";


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