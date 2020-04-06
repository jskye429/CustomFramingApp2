import React from "react";
import "./quote.css";
import Section from "../../components/Section";
import QuoteForm from "./QuoteForm";


function QuoteSpec(props){
  return (
    <Section>
      <div className={`modal ${props.specHidden}`}>
        <div className="modal-content smoke">
          <div className="columns">
            
            <div className="column main">

            <button 
            className="button"
            onClick={props.closerfq}
            >X</button>
            <h1 className="is-size-3 has-text-centered banner">
              Calculate Quote: "{props.series}" {props.sku}</h1>
            <br/> 
            <div className="columns">

                <div className="column is-half left-pad is-pulled-left">
                    <label className="title">Specs</label>
                    <br/>
                    <br/>
                    <div>SKU: {props.sku}</div>
                    <div>Price per Foot: ${props.price}.00</div>
                    <div>Finish: {props.finish}</div>
                    <div>Depth: {props.depth} inches</div>
                    <div>Width: {props.width} inches</div>
                </div>

                <div className="column is-half is-pulled-right right-pad">
                  <QuoteForm
                  height={props.height}
                  handleHeight={props.handleHeight}
                  length={props.length}
                  handleLength={props.handleLength}
                  handleQuoteRequest={props.handleQuoteRequest}
                  />
                </div>

            </div>

          </div>


      </div>

      {/* end modal */}
      </div>
      </div>
      </Section>
  );
}



export default QuoteSpec;
