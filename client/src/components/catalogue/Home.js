import React, { Component } from "react";
import Banner from "../Banner";
import Card from "../Cards/Card";
import Section from "../Section";
import RejModal from "../Quote/Modals/RejModal";
import RFQModal from "../Quote/Modals/RFQModal";
import "./home.css";
import axios from "axios"
import logo from "../../images/logo-light.png"

import calculate from "../Quote/js/RFQ";
import QuoteSpec from "../Quote/QuoteSpec";

class Home extends Component {
  state = {
    frameData: [], 
    specData: [],
    userID: "5e61ac00fc8f4e67c8568f12", //hard coded to test, should be update when server is restarted to match the -id of user in your db you'd like to test, but we will get this update with authentification once we have it
    rfqData:{},
    height: Number,
    length: Number,
    totalMeasure: Number,
    cost: Number,
    RFQModal: "",
    RejModal:"",
    specHidden: ""
  };

  componentDidMount(){
  
    axios.get("/api/frames").then(response =>{
      console.log("axios response:", response.data)
      this.setState({frameData: response.data})
    })
  }

  //perhaps load quote as prop here......
  handleView = event => {
    const spec = event.target.attributes.getNamedItem("sku").value;
      axios.get("/api/frames/quoteSpec/"+spec).then(response=>{
      this.setState({rfqData: response.data[0]}, ()=>{
        this.callrfq()
      })
    });
  };

  callrfq = () =>{
    this.setState({specHidden: "is-active"})
  }
  closerfq = () =>{
    this.setState({specHidden: ""})
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

        this.setState({cost: calculate.priceCalc(this.state.totalMeasure, this.state.rfqData.price)})
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
      frameID: this.state.rfqData._id,
      sku: this.state.rfqData.sku,
      series: this.state.rfqData.series,
      finish: this.state.rfqData.finish,
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
      this.closerfq();
    })
  }

  handleExit = () => {
    this.setState({RFQModal: ""}, ()=>{
      this.setState({RejModal: ""})
    })
  } 

  render() {
    return (
      <Section>
          
          <div className={`columns is-vcentered ${this.state.catHidden}`}>
            {/* banner */}
            <Banner
            title="Catalog"
            subtext=" Find an estimate for your customized frame quickly and easily."
            />
          </div>
      
        <br></br>

        
        {this.state.frameData.map(item => (
          <div className="column is-half is-pulled-left">
            <Card
              key={item._id}
              series={item.series}
              finish={item.finish}
              depth={item.depth}
              width={item.width}
              price={item.price}
              sku={item.sku}
              handleView={this.handleView}
              img={logo}
            />
          </div>
        ))}

        <QuoteSpec
        specHidden={this.state.specHidden}
        closerfq={this.closerfq}
        series={this.state.rfqData.series}
        finish={this.state.rfqData.finish}
        sku={this.state.rfqData.sku}
        price={this.state.rfqData.price}
        depth={this.state.rfqData.depth}
        width={this.state.width}
        height={this.state.height}
        handleHeight={this.handleHeight}
        handleLength={this.handleLength}
        handleQuoteRequest={this.handleQuoteRequest}
        RFQModal={this.state.RFQModal}
        RejModal={this.state.RejModal}
        handleCart={this.handleCart}
        handleExit={this.handleExit}
        />
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

        </Section>
    );
  }
}

export default Home;