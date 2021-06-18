import React from 'react'
import { GiWorld } from 'react-icons/gi';
import { SiOpenstreetmap } from 'react-icons/si';
import { BsMap,BsHeart } from 'react-icons/bs';


const Feature = () =>   {
    return (
        <section className='section-features' id='#features'>
           
<div className='row'>
    <div className='col-1-of-4'>
        <div className='feature-box'>
        <i className='feature-box__icon icon-basic-world'><GiWorld/></i>
        <h3 className='heading-tertiary'>Explore the world</h3>
        <p className='feature-box__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quia quod ullam, architecto</p>
        </div>
    </div>

    <div className='col-1-of-4'>
        <div className='feature-box'>
        <i className='feature-box__icon icon-basic-world'>< SiOpenstreetmap /></i>
        <h3 className='heading-tertiary'>Meet Nature</h3>
        <p className='feature-box__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quia quod ullam, architecto</p>
        </div>
    </div>

    <div className='col-1-of-4'>
        <div className='feature-box'>
        <i className='feature-box__icon icon-basic-world'><BsMap/></i>
        <h3 className='heading-tertiary'>Find your way</h3>
        <p className='feature-box__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quia quod ullam, architecto</p>
        </div>
    </div>
    <div className='col-1-of-4'>
        <div className='feature-box'>
        <i className='feature-box__icon icon-basic-world'><BsHeart/></i>
        <h3 className='heading-tertiary'>Lived a healthier life</h3>
        <p className='feature-box__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quia quod ullam, architecto</p>
        </div>
    </div>

</div>

        </section>
    )
}

export default Feature
