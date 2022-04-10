import React from 'react'

import './InputText.css'

/**
 * 
 * @param {String} type -> Type of the Input
 *  @param {String} label -> The label of the Input
 * @param {String} name -> The name of the Input
 * @param {String} placeholder -> The placeholder of the Input
 */

function InputText({type,label ,name, placeholder}) {
    return (
        <div className="input-text">
            <label htmlFor={name}>{label}</label>
            <input type={type} placeholder={placeholder} required name={name}/>
        </div>
    )
}

export default InputText
