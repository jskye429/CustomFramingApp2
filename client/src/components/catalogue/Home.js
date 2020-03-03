import React, { Component } from "react";

import Card from "../Cards/Card";
import "./home.css";

import axios from "axios"

class Home extends Component {
  state = {
    data: [],
    selectedView: {
      key: this.sku,
      sku: "",
      series: "",
      finish: "",
      height: "",
      width: "",
      price: ""
    }
  };

  componentDidMount(){
    axios.get("/api/frames").then(response =>{
      console.log(response)
      this.setState({data: response.data})
    })
  }


  handleView = event => {
    this.setState(
      {
        selectedView: {
          value: event.target.attributes.getNamedItem("_id").value,
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
              key={item._id}
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
