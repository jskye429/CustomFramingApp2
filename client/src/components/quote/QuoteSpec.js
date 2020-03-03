import React, { Component } from "react";
import axios from "axios";

class QuoteSpec extends Component{
 
  // console.log(props);
  state={
    specData:{}
  }

  componentDidMount(){
    const skusku = this.props.match.params.sku;
    axios.get("/api/frames/quoteSpec/" + skusku).then(response =>{
      this.setState({specData: response.data[0]})

    })
  }

  render(){
  const props = this.props;
  return (
    <div className="section">
      <h1 className="is-size-1 has-text-centered">Get a Quote for {this.state.specData.sku}</h1>
      <br></br>

      <div className="field">
          <label className="label">Frame</label>
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

      <form>
        {/* ENTER A HEIGHT */}
        <div className="field">
          <label className="label">Height</label>
          <div className="control">
            <input
              type="text"
              name="height"
              value=""
              placeholder="Please Enter a Height"
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
              value=""
              placeholder="Please Enter a Length"
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <input className="button is-light" type="submit"></input>
      </form>
    </div>
  );
  }
}



export default QuoteSpec;
