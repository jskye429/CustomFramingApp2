import React, { Component } from "react";
import Section from "../Section";
import Axios from "axios";

class Cart extends Component{

  state={
    userID:"5e61ac00fc8f4e67c8568f12",
    cart: []
  }

  //NOTE FOR DEVELOPMENT: TABLE JOIN WHERE USER ID IS FOUND IN CART TABLE
  componentDidMount(){
    const uid = this.props.match.params.id; //"id" must appear as it does in the API router parameters
    Axios.get("/api/cart/list/" + uid).then(response =>{
      console.log("axios response:", response.data)
      // this.setState({cart: response})
    })
  }
 
render(){
    return (
      <Section>
        <h1>Cart</h1> 
      </Section> 
    )
  }
  
}

export default Cart;