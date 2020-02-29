import React from "react";

function QuoteSpec(props) {
  return (
    <div className="section">
      <h1 className="is-size-1 has-text-centered">Get a Quote for {props.sku}</h1>
      <br></br>

      <div className="field">
          <label class="label">Frame</label>
          <div>
            SKU: {props.sku}
          </div>
          <div>
            Finish: {props.finish}
          </div>
          <div>
            Width: {props.width}
          </div>
        </div>

      <form>
        {/* ENTER A HEIGHT */}
        <div className="field">
          <label className="label">Height</label>
          <div className="control">
            <input
              type="text"
              name="height"
              value=""
              placeholder="Please Enter a Height"
            />
          </div>
        </div>

        {/* ENTER A LENGTH */}
        <div className="field">
          <label className="label">Length</label>
          <div className="control">
            <input
              type="text"
              name="length"
              value=""
              placeholder="Please Enter a Length"
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <input className="button is-light" type="submit"></input>
      </form>
    </div>
  );
}

export default QuoteSpec;
