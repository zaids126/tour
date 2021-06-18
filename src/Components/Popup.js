import React from 'react'

import { GrFormClose } from 'react-icons/gr';


const Popup = (props) => {
    return (props.trigger)  ? (
        <div className='popup'>
            <div className='popup__content'>
                
        <i className='popup__btn--close' onClick = {() => props.setTrigger(false)}><GrFormClose/></i>
            {props.children}
            </div>
       </div>
    ):'';
}

export default Popup;
