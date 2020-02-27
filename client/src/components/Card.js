import React from "react";

function Card(props){
    return(
        <div className= "card">
            <div className="card-header">
                {props.series}/{props.finish}
            </div>
            <div className="card-content">
                Height: {props.height}
                Width: {props.width}
                Price: ${props.price_per_foot}
            </div>
        </div>
    )
}

export default Card