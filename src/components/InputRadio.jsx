import React from "react";

import "./InputRadio.css";

/**
 * 
 * @param {String} type -> allows us to show either inputs for Format or for Schedule
 * @param {String} title -> The title of our section
 * @param {function} setVisible -> allows us to choose which kind of schedule we will display 
 *   
 */

function InputRadio({ type, title, setVisible }) {
  return (
    <div className="modal-radios">
      <p className="radio-title">{title}</p>
      {type === "format" ? (
        <>
          <div className="radio-group">
            <label>
            <input type="radio" defaultChecked name="radio1" value="excel" />
            Excel</label>
          </div>
          <div className="radio-group">
            <label>
            <input type="radio" name="radio1" value="cvs" />
            CVS</label>
          </div>
        </>
      ) : (
        <>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="radio"
                value="no_repeat"
                defaultChecked
                onChange={() => {
                  setVisible("none");
                }}
              />
              no repeat
            </label>
          </div>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="radio"
                value="s_date"
                onChange={() => {
                  setVisible("date");
                }}
              />
              Specific date
            </label>
          </div>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="radio"
                value="daily"
                onChange={() => {
                  setVisible("daily");
                }}
              />
              daily
            </label>
          </div>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="radio"
                value="weekly"
                onChange={() => {
                  setVisible("weekly");
                }}
              />
              weekly
            </label>
          </div>
        </>
      )}
    </div>
  );
}

export default InputRadio;
