import React from "react"

function Modal(props){
    return(
        <div>
        <div className= {`modal ${props.activeModal}`}>
            <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Your Requested Quote</p>
                    </header>
                    <section className="modal-card-body">
                       <p>Total footage: {props.totalMeasure}</p> 
                        <p>Total Price: {props.priceEst}</p>
                    </section>
                    <footer className="modal-card-foot">

                        <button 
                        className="button is-success"
                        onClick={props.handleCart}
                        >Move to Cart</button>

                        <button 
                        className="button"
                        onClick={props.handleExit}
                        >Cancel</button>
                    </footer>           
                </div>
        </div>
        </div>
    )
}

export default Modal