import React, {Component} from "react";
import data from "../../frames.json";
import Card from "../Cards/Card";
import "./home.css";

class Home extends Component{
  state={
    data,
    selectedView: ""
  }

  handleView = event => {
    this.setState({selectedView: event.target.value}, ()=>{
      window.location.href="/quoteSpec";
    })
  }

  render(){
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          {/* banner */}
          <div className="column is-full">
            <h1>Framed</h1>
              <p>Find an estimate for your customized frame quickly and easily</p>
          </div>
        
            {this.state.data.map(item=>(
              <div className="column is-third">
                <Card 
                key={item.sku}
                series={item.series}
                finish={item.finish}
                width={item.width}
                price={item.price_per_foot}
                handleView= {this.handleView}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
