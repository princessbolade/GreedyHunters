import React from "react";
import "./selector.css";

const Selectors = () => (
  <>
    <div className="Selected-game">
      <span>Game Grid</span>
      <div class="select">
        <select name="slct" id="slct">
          <option selected disabled></option>
          <option value="1">10</option>
          <option value="2">5</option>
          <option value="3">20</option>
        </select>
        <div className="after">
          <i className="fas fa-chevron-up "></i>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  </>
);

export default Selectors;
