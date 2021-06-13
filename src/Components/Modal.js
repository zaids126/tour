
import React from 'react'
import tour1 from '../imgs/nat-8.jpg'
import tour2 from '../imgs/nat-9.jpg'

const Modal = () => {
    return (
        <div className='modal' id='modal'>
            <div className='modal__content'>
            <div className='modal__left'>
                <img src={tour1} alt='Lake Tour' className='modal__pic'/>
                <img src={tour2} alt=' Boat Tour ' className='modal__pic'/>
            </div>
            <div className='modal__right'>
                <a href='#section-tours' className='modal__close'>&times;</a>
                <h2 className='heading-secondary u-margin-bottom-medium'>Start Booking Now</h2>
                <h3 className='heading-tertiary u-margin-bottom-small'>Important &ndash; Please read terms before booking</h3>
                <p className='modal__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officia, minima, quam natus libero tenetur quae, eos distinctio saepe temporibus iure! Deleniti vero vitae consectetur dolores voluptatibus inventore. Nulla, quia.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quasi facilis doloribus. Eum possimus debitis, cum facilis saepe nemo eaque iure accusantium qui, provident, repudiandae nisi ducimus animi laudantium consectetur.

                </p>
                <a href='#BookNow' className='btn btn--green'>Book Now</a>
            </div>
            </div>

        </div>
    )
}

export default Modal
