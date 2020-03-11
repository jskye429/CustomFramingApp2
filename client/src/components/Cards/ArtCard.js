import React from "react";
import "./card.css";

function ArtCard(props){
    return(
       
         <div className= "card">
            <br/>
            <div className="card-content">
                <div className="columns centered">

                <img 
                style={props.style}
                alt="artprint"
                src={props.img}/>
                
            </div>
            <button
                className="button"
                onClick={props.handleView} 
                >Add to Cart</button>
            </div>
            <div className="caption centered card-footer">
                 {props.caption}
            </div>
        </div>   
        
        
    )
}

export default ArtCard