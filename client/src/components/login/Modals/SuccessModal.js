import React from "react";
import "./modal.css"

function SuccessModal(props){
    return(
        <div>
            <div className= {`modal ${props.successModal}`}>
                <div className="modal-background"></div>
                    <div className="modal-card is-small">
                        <section className="modal-card-body">
                            <p>Welcome {props.firstName}</p>
                        </section>
                        <footer className="modal-card-foot">
                            <button 
                            className="button is-success"
                            onClick={props.handleExit}
                            >Continue</button>
                        </footer>           
                    </div>
            </div>
        </div>
    )
}

export default SuccessModal