import React from "react";
import "./card.css";

function Card(props){
    return(
       
         <div className= "card">
            <div className="card-header">
                {props.series} / {props.finish}
            </div>
            <div className="card-content">
                <div>Depth: {props.depth}</div>
                <div>Width: {props.width}</div>
                <div>Price/FT: ${(props.price)}.00</div>
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
                >Create Quote</button>
            </div>
            <div className="card-footer">
                SKU: {props.sku}
            </div>
        </div>   
        
        
    )
}

export default Card