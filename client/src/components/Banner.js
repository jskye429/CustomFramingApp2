import React from "react";

function Banner(props){
    return(
           <div className="column banner">
            <h1 className="title">{props.title}</h1>
            <p>
                {props.subtext}
            </p>
         </div>
    )
}
export default Banner