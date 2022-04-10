import React from 'react'

/**
 * 
 * @param {String} title -> title of the section 
 */

function Daily({title}) {
   return (
      <div className="modal-weekly-container">
      <p className="weekly-title">{title}</p>
      <div className="weekly-inputs">
      <input type="time" className="time-selector" defaultValue="13:30" />
      </div>
      </div>
   )
}

export default Daily
