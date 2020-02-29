import React from "react";

function Card(props){
    return(
        <div className= "card">
            <div className="card-header">
                {props.series} / {props.finish}
            </div>
            <div className="card-content">
                <div>Height: {props.height}</div>
                <div>Width: {props.width}</div>
                <div>Price: ${props.price}/ft</div>
                <button onClick={props.handleView} value={props.sku}>View</button>
            </div>
            <div className="card-footer">
                SKU: {props.sku}
            </div>
        </div>
    )
}

export default Card