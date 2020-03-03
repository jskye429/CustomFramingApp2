import React, { Component } from "react";

import Card from "../Cards/Card";
import "./home.css";

import axios from "axios"

class Home extends Component {
  state = {
    frameData: [], 
    specData: []
  };

  componentDidMount(){
    axios.get("/api/frames").then(response =>{
      this.setState({frameData: response.data})
    })
  }

  handleView = event => {
    const spec = event.target.attributes.getNamedItem("sku").value
      window.location.href=`/quoteSpec/${spec}`
  };

  render() {
    return (
      <div className="section">
        <div className="container">
          
          <div className="columns is-vcentered">
            {/* banner */}
            <div className="column banner">
              Framed
              <p>
                Find an estimate for your customized frame quickly and easily
              </p>
            </div>
          </div>
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
            />
          </div>
        ))}
        {/* end */}
      </div>
    );
  }
}

export default Home;
