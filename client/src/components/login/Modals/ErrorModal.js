import React from "react"

function ErrorModal(props){
    return(
        <div>
            <div className= {`modal ${props.successModal}`}>
                <div className="modal-background"></div>
                    <div className="modal-card is-small">
                        <section className="modal-card-body">
                            <p>Please complete all fields</p>
                        </section>
                        <footer className="modal-card-foot">
                            <button 
                            className="button is-danger"
                            onClick={props.handleErrorExit}
                            >OK</button>
                        </footer>           
                    </div>
            </div>
        </div>
    )
}

export default ErrorModal