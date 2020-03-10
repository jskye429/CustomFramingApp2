import React from "react";

import Metal from "../components/StudioFrames/metallic.jpg"

var metalFrame = {
    height: "100%",
    width: "100%",
    zoom: "100%",
    blackframePic:`url("${Metal}")`,
};

function Metal(props) {
    return(
        <div style={metalFrame} className="thumbnail">
        <h1 className="metal">{props.metal}</h1>
        <p>
           {props.subtext}  
        </p>
    </div>
    
    )
}



export default Metal 