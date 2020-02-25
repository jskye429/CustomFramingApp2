import React from "react";

function Quote() {
  return (
    <div>
      <h1 className="is-size-1 has-text-centered">Get a Quote</h1>
      <br></br>
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

        {/* DROP DOWN FOR FRAME SKU SELECTION */}
        <div className="field">
          <label class="label">Frame</label>
          <div className="control">
            <div className="select"></div>
            <select name="itemList" required>
              <option value="" disabled selected hidden>
                Choose a Frame
              </option>
              <option value="frame1">Test Frame 1</option>
              <option value="frame2">Test Frame 2</option>
              <option value="frame3">Test Frame 3</option>
            </select>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <input className="button is-light" type="submit"></input>
      </form>
    </div>
  );
}

export default Quote;
