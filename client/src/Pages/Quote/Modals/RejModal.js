import React from "react";

function RejModal(props){
    return(
    <div className= {`modal ${props.RejModal}`}>
        <div className="modal-background"></div>
            <div style={{width: "300px"}} className="quote modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{props.heading}</p>
                </header>
                <section className="modal-card-body">
                    <p>{props.text1}</p> 
                </section>
                <footer className="modal-card-foot"> 
                    <button 
                    className="button"
                    onClick={props.handleExit}
                    >Ok</button>
                </footer>           
            </div>
        </div>   
    )
}

export default RejModal