import React from "react";

function RFQModal(props){
    return(
        <div className= {`modal ${props.RFQModal}`}>
            <div className="modal-background"></div>
                <div style={{width: "450px"}} className="quote modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Your Requested Quote</p>
                    </header>
                    <section className="modal-card-body">
                       <p>Total footage: {props.totalMeasure} Feet</p> 
                        <p>Total Price: ${props.cost}</p>
                    </section>
                    <footer className="modal-card-foot"> 

                        <button 
                        className="button is-success"
                        type="submit"
                        onClick={props.handleCart}
                        >Move to Cart</button>

                        <button 
                        className="button"
                        onClick={props.handleExit}
                        >Cancel</button>
                    </footer>           
                </div>
        </div>
    )
}

export default RFQModal