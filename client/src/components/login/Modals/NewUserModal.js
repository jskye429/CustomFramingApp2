import React from "react"

function NewUserModal(props){
    return(
        <div>
            <div className= {`modal ${props.successModal}`}>
                <div className="modal-background"></div>
                    <div className="modal-card is-small">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Your Requested Quote</p>
                        </header>
                        <section className="modal-card-body">
                            <p>Welcome {props.firstName}</p>
                        </section>
                        <footer className="modal-card-foot">
                            <button 
                            className="button is-success"
                            onClick={props.handleExit}
                            >OK</button>
                        </footer>           
                    </div>
            </div>
        </div>
    )
}

export default NewUserModal