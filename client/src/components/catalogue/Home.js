import React, {Component} from "react";
import data from "../../frames.json";
import Card from "../Card.js";

class Home extends Component{
  state={
    data
  }

  render(){
  return (
    <div className="section">
      <div className="container">
        <h1>Framed</h1>
          <p>Find an estimate for your customized frame quickly and easily</p>
          {this.state.data.map(item=>(
            <Card 
            key={item.sku}
            series={item.series}
            finish={item.finish}
            width={item.width}
            price={item.price_per_foot}
            />
  ))}
      </div>
    </div>
    );
  }
}

export default Home;
