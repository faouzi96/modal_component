import React from 'react'

import './BtnContainer.css'

function BtnContainer() {
    return (
        <div className="btn-container">
        <button type="reset" className="btn btn-reset">Cancel</button>
        <button type="submit" className="btn btn-submit">OK</button>
        </div>
    )
}

export default BtnContainer
