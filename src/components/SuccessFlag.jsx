import React from 'react'
import { createPortal } from 'react-dom';

import "./SuccessFlag.css"

function SuccessFlag() {
    return (
        createPortal(
            <div className="flag-success">
                <h2>Success</h2>
            </div>
            ,document.body)
    )
}

export default SuccessFlag
