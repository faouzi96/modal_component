import React from 'react'
import TimeInput from './TimeInput';

/**
 * 
 * @param {String} title -> title of the section 
 */

function DateInput({title}) {
   const date = React.useState(Date.now)
    return (
        <div className="modal-weekly-container">
        <p className="weekly-title">{title}</p>
        <div className="weekly-inputs">
          <input type="date" className="time-selector" defaultValue="2022-04-09"/> 
          <p>at</p>
          <TimeInput />
        </div>
        </div>
    )
}

export default DateInput
