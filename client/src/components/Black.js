import React from "react";
import matteBlack from "../components/StudioFrames/matteBlack.jpg"

var blackFrame = {
    height: "100%",
    width: "100%",
    zoom: "100%",
    blackframePic:`url("${matteBlack}")`,
};

function Black(props){
    return(
        <div style={blackFrame} className="thumbnail">
        <h1 className="blackmatte">{props.blackmatte}</h1>
        <p>
           {props.subtext}  
        </p>
    </div>
    )

}


export default Black