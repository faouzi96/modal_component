import React from 'react'

import './Btn.css'

/**
 * type : String -> Type of the button either Submit or Reset
 */

function Btn({type}) {
    return (
        <button type={type} className={"btn btn-"+type}>
            {type === "submit" ? "OK" : "Cancel"}
        </button>
    )
}

export default Btn
