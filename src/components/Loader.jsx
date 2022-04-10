import React from 'react'
import { createPortal } from 'react-dom';

import './Loader.css'

function Loader() {
    return (
        createPortal(
        <div className="loader">
           Loading...
        </div>,document.body)
    )
}

export default Loader
