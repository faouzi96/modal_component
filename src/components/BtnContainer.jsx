import React from 'react'
import Btn from './Btn';

import './BtnContainer.css'

function BtnContainer() {
    return (
        <div className="btn-container">
            <Btn type="reset" />
            <Btn type="submit" />
        </div>
    )
}

export default BtnContainer
