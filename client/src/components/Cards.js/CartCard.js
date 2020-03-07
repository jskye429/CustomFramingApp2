import React from "react";

function CartCard(props){
    return(
<div className= "card">
            {/* <div className="card-header">
                {props.series} / {props.finish}
            </div> */}
            <div className="card-content">
                <div>SKU: {props.sku}</div>
                <div>Length: {props.length}</div>
                <div>Height: {(props.height)}</div>
                <div>Cost: ${props.cost}.00</div>
                
            </div>
            <div className="card-footer">
                <button
                className="button is-info is-med"
                onClick={props.deleteCart} 
                value= {props.value}
                itemsku={props.itemsku}
                >Remove</button>
            </div>
        </div>   
    )
}

export default  CartCard