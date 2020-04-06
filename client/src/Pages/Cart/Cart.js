import React, { Component } from "react";
import Section from "../../components/Section";
import Axios from "axios";
import CartCard from "../../components/Cards/CartCard";
import Banner from "../../components/Banner";
import "./cart.css"
import img from "../../images/logo-light.png";

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
      this.setState({cart: response.data})
    })
  }

 deleteCart = event =>{
   event.preventDefault()
   const item = event.target.value
   const sku = event.target.itemsku
   console.log("deleting item ID: ", item, sku)
   Axios.delete("/api/cart/list/" +item).then(response =>{
    console.log("post delete: ", response)
    let updatedCart = this.state.cart.filter(items=>{
      if(items._id === item){
          return false
      }
      return true
    })
    this.setState({cart: updatedCart})
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
        <div className="is-centered buff">
         <a className="is-pulled-right is-primary" href="/">Back to Catalogue</a>
        </div>
        {this.state.cart.map(item=>(
        <CartCard
        key={item._id}
        value={item._id}
        series={item.series}
        finish={item.finish}
        sku={item.sku}
        length={item.length}
        height={item.height}
        cost={item.cost}
        img={img}
        deleteCart={this.deleteCart}
        />
        ))}
        </div>

        <div>
          {/* Subtotal:{} */}
        </div>
      </Section> 
    )
  }
  
}

export default Cart;