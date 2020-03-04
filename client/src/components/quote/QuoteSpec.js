import React, { Component } from "react";
import "./quote.css";
import axios from "axios";
import Section from "../Section";
import calculate from "./js/RFQ"
import Modal from "../Modal";
import QuoteForm from "./QuoteForm";

class QuoteSpec extends Component{

  
  state={
    specData:{},
    height: Number,
    length: Number,
    totalMeasure: Number,
    priceEst: Number,
    activeModal: ""
  }  

  
  componentDidMount(){
    const skusku = this.props.match.params.sku;
    axios.get("/api/frames/quoteSpec/" + skusku).then(response =>{
      this.setState({specData: response.data[0]})
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

        this.setState({priceEst: calculate.priceCalc(this.state.totalMeasure, this.state.specData.price)})

        this.setState({activeModal: "is-active"})
      })
  }

  handleCart = event =>{
    console.log("Adding to Cart")
  }

  handleExit = () => {
    this.setState({activeModal: ""})
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

        <Modal
        activeModal={this.state.activeModal}
        totalMeasure= {this.state.totalMeasure}
        priceEst={this.state.priceEst}
        handleCart={this.handleCart}
        handleExit={this.handleExit}
        />

      </div>
      </Section>
  );
  }
}



export default QuoteSpec;
