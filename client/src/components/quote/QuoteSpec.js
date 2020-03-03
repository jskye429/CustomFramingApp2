import React, { Component } from "react";
import axios from "axios";

class QuoteSpec extends Component{
 
  state={
    specData:{},
    height: "",
    length: ""
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
    console.log("hello", this.state)
  }

  render(){
  return (
    <div className="section">
      <h1 className="is-size-1 has-text-centered">Calculate Quote: "{this.state.specData.series}" {this.state.specData.sku}</h1>
      <br/>
      <br/> 
      <div className="field v-centered">
          <label className="label">Specs</label>
          <div>
            SKU: {this.state.specData.sku}
          </div>
          <div>
            Finish: {this.state.specData.finish}
          </div>
          <div>
            Width: {this.state.specData.width}
          </div>
        </div>
      <br/>
      <form>
        {/* ENTER A HEIGHT */}
        <label className="label">Please select dimensions in Inches</label>
        <div className="field">
          <label className="label">Height</label>
          <div className="control">
            <input
              type="text"
              name="height"
              id="height"
              value={this.state.height}
              placeholder="Please Enter a Height"
              onChange={this.handleHeight}
            />
          </div>
        </div>

        {/* ENTER A LENGTH */}
        <div className="field">
          <label className="label">Length</label>
          <div className="control">
            <input
              type="text"
              name="length"
              id="length"
              value={this.state.length}
              placeholder="Please Enter a Length"
              onChange={this.handleLength}
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <input 
        className="button is-light" 
        type="submit"
        onSubmit={this.handleQuoteRequest}
        ></input>
      </form>
    </div>
  );
  }
}



export default QuoteSpec;
