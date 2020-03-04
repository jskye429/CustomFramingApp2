import React from "react";

function QuoteForm(props){
    return(
        <form>
        {/* ENTER A HEIGHT */}
        <label className="label">Please select dimensions in Inches</label>
        <div className="field">
          <label className="label">Height</label>
          <div className="control">
            <input
              type="number"
              name="height"
              id="height"
              value={props.height}
              placeholder="Please Enter a Height"
              onChange={props.handleHeight}
            />
          </div>
        </div>

        {/* ENTER A LENGTH */}
        <div className="field">
          <label className="label">Length</label>
          <div className="control">
            <input
              type="number"
              name="length"
              id="length"
              value={props.length}
              placeholder="Please Enter a Length"
              onChange={props.handleLength}
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <input 
        className="button is-success" 
        placeholder="Calculate"
        onClick={props.handleQuoteRequest}
        ></input>
      </form>
    )
}

export default QuoteForm