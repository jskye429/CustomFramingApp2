import React, { Component } from "react";
import Section from "../Section";
import Axios from "axios";
import CartCard from "../Cards.js/CartCard";
import Banner from "../Banner";

class Cart extends Component{

  state={
    userID:"5e61ac00fc8f4e67c8568f12",
    cart: []
  }

  //NOTE FOR DEVELOPMENT: TABLE JOIN WHERE USER ID IS FOUND IN CART TABLE
  componentDidMount(){
    // const uid = this.props.match.params.id; //"id" must appear as it does in the API router parameters
    const uid = this.state.userID;
    Axios.get("/api/cart/list/" + uid).then(response =>{
      console.log("axios response:", response)
      this.setState({cart: response.data}, ()=>{
        console.log("Cart: ", this.state.cart)
      })
      
    })
  }

 deleteCart = event =>{
   event.preventDefault()
   const item = event.target.value
   const sku = event.target.itemsku
   console.log("deleting item ID: ", item, sku)
   Axios.delete("/api/cart/list/" +item).then(response =>{
    this.forceUpdate()
   })
 }
 
render(){
    return (
      <Section>
        <div ClassName="container">
       <Banner
       title="Cart"
       subtext="Review items and checkout."
       />

        {this.state.cart.map(item=>(
        <CartCard
        key={item._id}
        value={item._id}
        sku={item.sku}
        length={item.length}
        height={item.height}
        cost={item.cost}
        deleteCart={this.deleteCart}
        />
        ))}
        </div>
      </Section> 
    )
  }
  
}

export default Cart;