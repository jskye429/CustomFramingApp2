import React, { Component } from "react";
import data from "../../frames.json";
import Card from "../Cards/Card";
import "./home.css";

class Home extends Component {
  state = {
    data,
    selectedView: {
      value: this.sku,
      sku: "",
      series: "",
      finish: "",
      height: "",
      width: "",
      price: ""
    }
  };

  handleView = event => {
    console.log("event", event);
    console.log("this", event.target.attributes.getNamedItem("series").value);
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
        console.log(this.state.selectedView);
        // window.location.href="/quoteSpec/:id";
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

        {/* start */}
        <div className="section">
          <h1 className="is-size-1 has-text-centered is pulled right">
            Get a Quote for {this.state.selectedView.sku}
          </h1>
          <br></br>

          <div className="field">
            <label className="label">Frame</label>
            <div>SKU: {this.state.selectedView.sku}</div>
            <div>Finish: {this.state.selectedView.finish}</div>
            <div>Width: {this.state.selectedView.width}</div>
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
