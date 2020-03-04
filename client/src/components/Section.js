import React from "react"

function Section(props){
    return(
        <div className="section">
            {props.children}
        </div>
    )
}

export default Section