import React from "react"
import "./modal.css"

function ErrorModal(props){
    return(
 
            <div className= {`modal ${props.errorType}`}>
                <div className="modal-background"></div>
     
                    <div className="modal-card">
                        <section className="modal-card-body">
                            <p>{props.text1}</p>
                            <p>{props.text2}</p>
                        </section>
                        <footer className="modal-card-foot">
                            <button 
                            className="button is-danger"
                            onClick={props.handleErrorExit}
                            >OK</button>
                        </footer>           
                    </div>
            
            </div>
   
    )
}

export default ErrorModal