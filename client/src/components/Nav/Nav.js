import React from "react";
import { Link } from "react-router-dom";
// import { useAuth0 } from "../../react-auth0-spa";

const Nav = () => {
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
     

      <div className="buttons is-centered">
        <button className=" button is-success">
          <Link to="/">Home</Link>
        </button>

        <button className="button is-success">
          <Link to="/login">Login</Link>
        </button>

        <button className="button is-success">
          <Link to="/cart">Cart</Link>
        </button>

        {/* <button className="button is-success"><Link to="/quote">Request a Quote</Link></button> */}
      </div>
      <br />
    </div>
  );
}

export default Nav;
