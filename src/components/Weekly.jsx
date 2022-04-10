import React from "react";

import "./Inputs.css";

/**
 * 
 * @param {String} title -> The title of the section. 
 */

const Weekly = ({title}) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="modal-weekly-container">
    <p className="weekly-title">{title}</p>
    <div className="weekly-inputs">
      <select name="day" className="day-selector" onChange={handleChange}>
        <option value="monday">Monday</option>
        <option value="thuesday">Thuesday</option>
        <option value="wednesday">Wednesday</option>
        <option value="thursday">Thursday</option>
        <option value="friday">Friday</option>
        <option value="saturday">Saturday</option>
        <option value="sunday">Sunday</option>
      </select>
      <p>at</p>
      <input type="time" className="time-selector" defaultValue="13:30" />
    </div>
    </div>
  );
};

export default Weekly;
