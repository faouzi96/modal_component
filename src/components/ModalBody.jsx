import React from 'react'

import './ModalBody.css'

import InputText from './InputText';
import InputRadio from './InputRadio';
import Weekly from './Weekly';
import Daily from './Daily';
import DateInput from './DateInput';

/**
 * state : allows us to choose the kind of schedule 
 */

function ModalBody() {
    const [state, setState] = React.useState("none")
    return (
        <div className="modal-body">
            <InputText type="text" name="name" placeholder="Shareable Report" label="Report name"/>
            <InputRadio type="format" title="Format" />
            <InputText type="email" name="email" placeholder="example@email.com" label="E-mail to"/>
            <InputRadio type="schedule" setVisible={setState} title="Schedule" />
            {state === "date" && <DateInput title="Date" />}
            {state === "weekly" && <Weekly title="Every" />}
            {state === "daily" && <Daily title="Everyday at" />}
        </div>
    )
}

export default ModalBody
