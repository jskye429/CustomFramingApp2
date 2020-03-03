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
                <div>Price: ${(props.price)}.00</div>
                <button 
                onClick={props.handleView} 
                sku={props.sku}
                series={props.series}
                finish={props.finish}
                height={props.height}
                width={props.width}
                price={props.price}
                >View</button>
            </div>
            <div className="card-footer">
                SKU: {props.sku}
            </div>
        </div>   
        
        
    )
}

export default Card