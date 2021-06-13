import React from 'react'
import logofoot from '../imgs/Fulllogo12.png';

const Footer = () => {
    return (
        <section  className='footer'>
            <div className='footer__logo-box'>
                <img src={logofoot}  alt='full logo' className='footer__logo'/>

            </div>
            <div className='row'>
                <div className='col-1-of-2'>
                    <div className='footer__navigation'>
                        <ul>
                            <li className='footer__item'><a href='#Company' className='footer__link'>Company</a></li>
                            <li className='footer__item'><a href='#ContactUs' className='footer__link'>Contact us</a></li>
                            <li className='footer__item'><a href='#Carrers' className='footer__link'>Carrers</a></li>
                            <li className='footer__item'><a href='#PrivacyPolicy' className='footer__link'>Privacy policy</a></li>
                            <li className='footer__item'><a href='#Terms' className='footer__link'>Terms</a></li>

                        </ul>
                    </div>
                </div>
                <div className='col-1-of-2'>
                    <p className='footer__copyright'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima magni rem saepe reprehenderit facere. Ullam, sunt sapiente. Doloremque eaque perspiciatis asperiores voluptate blanditiis a dolores quam explicabo provident quo!</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;