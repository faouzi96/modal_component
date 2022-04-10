import React from 'react'
import TimeInput from './TimeInput';

/**
 * 
 * @param {String} title -> title of the section 
 */

function Daily({title}) {
   return (
      <div className="modal-weekly-container">
      <p className="weekly-title">{title}</p>
      <div className="weekly-inputs">
        <TimeInput />
      </div>
      </div>
   )
}

export default Daily
