import React from 'react'

import './Modal.css'

import TitleModal from './TitleModal';
import ModalBody from './ModalBody';
import BtnContainer from './BtnContainer';
import formfetch from '../functions/formfetch';
import createPostObject from '../functions/createPostObject';
import Loader from './Loader';
import SuccessFlag from './SuccessFlag';

/**
 * formfetch() -> allows us to send our POST request using fetch
 * createPostObject() -> allows us to create the object of data which we will send through formfetch 
 */


export const Modal = () => {
    const [loader, setLoader] = React.useState(false)
    const [responseOk, setResponseOk] = React.useState(false)

    React.useEffect(()=>{
        if(responseOk){
            setTimeout(()=>{
                setResponseOk(false)
            },600)
        }
    },[responseOk])

    const handleForm = async (e)=>{
        e.preventDefault();
        setLoader(true)
        const data = createPostObject(e.target)
        const response = await formfetch("https://postman-echo.com/post","POST",data)
        if(response.ok){
            setResponseOk(state => !state)
            console.log('ok')
        }
        else{
            setResponseOk(false)
        }
        setLoader(false)
    }
    return (
        <div>
        {loader && <Loader />}
        {responseOk && <SuccessFlag />}
            <form className="modal" onSubmit={handleForm}>
                <TitleModal />
                <ModalBody />
                <hr/>
                <BtnContainer />
            </form>
        </div>
    )
}