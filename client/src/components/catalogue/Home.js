import React, { Component } from "react";
import data from "../../frames.json";
import Card from "../Cards/Card";
import "./home.css";

class Home extends Component {
  state = {
    data,
    selectedView: ""
  };

  handleView = event => {
    this.setState({ selectedView: event.target.value }, () => {
      window.location.href = "/quoteSpec";
    });
  };

  render() {
    return (
      <div className="section">
        <div className="container">
          {/* banner */}
          <div className="column is-full">
            <h1 className="has-text-centered">Framed</h1>
            <p className="has-text-centered">Find an estimate for your customized frame quickly and easily</p>
          </div>

          {this.state.data.map(item => (
            
              <div className="column is-half is-pulled-left">
                <Card
                  key={item.sku}
                  series={item.series}
                  finish={item.finish}
                  height={item.height}
                  width={item.width}
                  price={item.price}
                  sku={item.sku}
                  handleView={this.handleView}
                />
              
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
