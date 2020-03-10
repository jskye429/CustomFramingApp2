import React from "react";
import matteColor from "../components/StudioFrames/matteColor.jpg"

var colorFrame = {
    height: "100%",
    width: "100%",
    zoom: "100%",
    blackframePic:`url("${matteColor}")`,
};

function Color(props) {
    return(
        <div style={colorFrame} className="thumbnail">
        <h1 className="colormatte">{props.colormatte}</h1>
        <p>
           {props.subtext}  
        </p>
    </div>
    
    )
}


export default Color 