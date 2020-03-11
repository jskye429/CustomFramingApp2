import React, { Component } from "react";
import Banner from "../Banner";
import Card from "../Cards/Card";
import Section from "../Section";
import "./home.css";
import axios from "axios"
import "../../images/logo.png"


class Home extends Component {
  state = {
    frameData: [], 
    specData: []
  };


  componentDidMount(){
    const axiosInstance = axios.create({
      baseURL: 'https://cors-anywhere.herokuapp.com/http://localhost:8081/'
    })
    axiosInstance.get("/api/frames").then(response =>{
      console.log(response.data)
      this.setState({frameData: response.data})
    })
  }

  handleView = event => {
    const spec = event.target.attributes.getNamedItem("sku").value
      window.location.href=`/quoteSpec/${spec}`
  };

  

  render() {
    return (
      <Section>
          
          <div className="columns is-vcentered">
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
              img={item.img}
            />
          </div>
        ))}
        </Section>
    );
  }
}

export default Home;
