import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div className="navbar">
      <h1 className="logo">Custom Studio Frames</h1>
      
      <div className="buttons is-centered">

      <button className="button is-Link"><Link to="/login">Login</Link></button>

      <button className=" button is-Link"><Link to="/">Catalog</Link></button>
      
      <button className="button is-Link"><Link to="/shopart">Art</Link></button>
      
      <button className="button is-Link"><Link to="/cart">Cart</Link></button>

    
      </div>
      <br />
      
    </div>
  
  );
}

export default Nav;
