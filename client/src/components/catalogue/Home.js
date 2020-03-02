import React, { Component } from "react";
import data from "../../frames.json";
import Card from "../Cards/Card";
import "./home.css";

// import axios from "axios"

class Home extends Component {
  state = {
    data,
    selectedView: {
      sku: "",
      series: "",
      finish: "",
      height: "",
      width: "",
      price: ""
    }
  };

  handleView = event => {
    this.setState(
      {
        selectedView: {
          sku: event.target.attributes.getNamedItem("sku").value,
          series: event.target.attributes.getNamedItem("series").value,
          finish: event.target.attributes.getNamedItem("finish").value,
          height: event.target.attributes.getNamedItem("height").value,
          width: event.target.attributes.getNamedItem("width").value,
          price: event.target.attributes.getNamedItem("price").value
        }
      },
      () => {
        let spec = this.state.selectedView.sku
        
        window.location.href="/quoteSpec/:"+spec;
        
          // return axios.get("/quoteSpec/"+spec)

      
        //axios.get by ID once DB is loaded, then call detail from that sku to the quoteSpec page
      }
    );
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
        {/* end */}
      </div>
    );
  }
}

export default Home;
