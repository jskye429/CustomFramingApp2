import React from "react";

function CartCard(props){
    return(
<div className= "card">
            <div className="cart card-header">
                {props.series} {props.finish}
            </div>
            <div className="cart card-content">
                <div>SKU: {props.sku}</div>
                <div>Length: {props.length} inches</div>
                <div>Height: {props.height} inches</div>
                <div>Cost: ${props.cost}.00</div>
                
            </div>
            <div className="cart card-footer">
                <button
                className="button del is-med"
                onClick={props.deleteCart} 
                value= {props.value}
                itemsku={props.itemsku}
                >Remove</button>
            </div>
        </div>   
    )
}

export default  CartCard