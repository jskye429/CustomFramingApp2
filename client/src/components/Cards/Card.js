import React from "react";
import "./card.css";

var imgStyle = {
    height: "150px",
    width: "150px"
  };

function Card(props){
    return(
       
         <div className= "card">
            <div className="card-header">
                {props.series} / {props.finish}
            </div>
            <div className="card-content">
                <div className="columns">
                    <div className="column c1 is-half is-pulled-left">
                        <div>Depth: {props.depth} inches</div>
                        <div>Width: {props.width} inches</div>
                        <div>Price/FT: ${(props.price)}.00</div>
                    </div>
                    <div className="column is-half is-pulled-right">
                        {props.img}
                        <img 
                        style={imgStyle}
                        src={props.img}></img>
                    </div>
                </div>
                <br/>
                <button
                className="button is-info is-small"
                onClick={props.handleView} 
                sku={props.sku}
                series={props.series}
                finish={props.finish}
                depth={props.depth}
                width={props.width}
                price={props.price}
                img={props.img}
                >Create Quote</button>
            </div>
            <div className="card-footer">
                SKU: {props.sku}
            </div>
        </div>   
        
        
    )
}

export default Card