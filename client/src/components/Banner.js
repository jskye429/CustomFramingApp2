import React from "react";
import textureImg from "../images/contrast-texture.jpg";

var backgroundImg = {
    height: "100%",
    width: "100%",
    zoom: "-500",
    backgroundImage:`url("${textureImg}")`
  };

function Banner(props){
    return(
           <div style={backgroundImg} className="column banner">
            <h1 className="title">{props.title}</h1>
            <p className="subtext">
                {props.subtext}
            </p>
         </div>
    )
}
export default Banner