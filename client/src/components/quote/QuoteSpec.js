import React, { Component } from "react";
import "./quote.css";
import axios from "axios";
import Section from "../Section";
import calculate from "./js/RFQ"
import RFQModal from "./Modals/RFQModal";
import RejModal from"./Modals/RejModal"
import QuoteForm from "./QuoteForm";

class QuoteSpec extends Component{

  
  state={
    userID: "5e61ac00fc8f4e67c8568f12", //hard coded to test, should be update when server is restarted to match the -id of user in your db you'd like to test, but we will get this update with authentification once we have it
    specData:{},
    height: Number,
    length: Number,
    totalMeasure: Number,
    cost: Number,
    RFQModal: "",
    RejModal:""
  }  

  
  componentDidMount(){
    const skusku = this.props.match.params.sku;
    axios.get("/api/frames/quoteSpec/" + skusku).then(response =>{
      this.setState({specData: response.data[0]}, ()=>{
        console.log(this.state.specData)
      })
    })
  }

  handleHeight= event =>{
    this.setState({height: event.target.value})
  }
  
  handleLength= event =>{
    this.setState({length: event.target.value})
  }

  handleQuoteRequest= event =>{
    event.preventDefault()
  
      this.setState({totalMeasure: calculate.footageCalc(this.state.length, this.state.height)}, ()=>{

        this.setState({cost: calculate.priceCalc(this.state.totalMeasure, this.state.specData.price)})
        this.callModals()
      })
  }

  callModals= () => {
    if(this.state.totalMeasure === "NaN" || this.state.cost=== "NaN"){
      this.setState({RejModal:"is-active"})
      return;
    }
    this.setState({RFQModal: "is-active"})
  }

  handleCart = event =>{
    event.preventDefault();

    var itemData = {
      userID: this.state.userID,
      frameID: this.state.specData._id,
      sku: this.state.specData.sku,
      series: this.state.specData.series,
      finish: this.state.specData.finish,
      height: this.state.height, 
      length: this.state.length, 
      totalMeasure: this.state.totalMeasure, 
      cost: this.state.cost
    }
    console.log("Adding to Cart: ", itemData);

    var postURL = `/api/cart/list/${this.state.userID}`
    axios.post(postURL, itemData).then(response=>{
      console.log("response from server",  response)
      this.setState({RFQModal: ""})
    })
  }

  handleExit = () => {
    this.setState({RFQModal: ""}, ()=>{
      this.setState({RejModal: ""})
    })
  } 

  render(){

  return (
    <Section>

      <div className="columns">
        <div className="column">

        <h1 className="is-size-3 has-text-centered banner">
          Calculate Quote: "{this.state.specData.series}" {this.state.specData.sku}</h1>
        <br/> 
        <div className="columns">
            <div className="column is-half v-centered left-pad">

                <label className="title">Specs</label>
                <br/>
                <br/>
                <div>SKU: {this.state.specData.sku}</div>
                <div>Price per Foot: ${this.state.specData.price}.00</div>
                <div>Finish: {this.state.specData.finish}</div>
                <div>Depth: {this.state.specData.depth} inches</div>
                <div>Width: {this.state.specData.width} inches</div>

          </div>
          <div className="column is-half">
        
            <QuoteForm
            height={this.state.height}
            handleHeight={this.handleHeight}
            length={this.state.length}
            handleLength={this.handleLength}
            handleQuoteRequest={this.handleQuoteRequest}
            />
          
          </div>
        </div>

        </div>

          <RFQModal
          RFQModal={this.state.RFQModal}
          totalMeasure= {this.state.totalMeasure}
          cost={this.state.cost}
          handleCart={this.handleCart}
          handleExit={this.handleExit}
          />

          <RejModal
          RejModal={this.state.RejModal}
          heading="Error"
          text1="Please make sure all fields are filled out."
          handleExit= {this.handleExit}
          />

      </div>
      </Section>
  );
  }
}



export default QuoteSpec;
