import React from 'react'
import '../sass/main.css'
import topLogo  from '../imgs/logowhite.PNG';
import Paraglide from '../imgs/Paragliding.mp4'
import {Link as Link2} from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='bg-video bg-video-header'> 
                <video className='bg-video__content' autoPlay muted loop>
                <source src={Paraglide} type='video/mp4'/>
                Your browser is not supported
                </video>
</div>

        <div className='header__logo-box'>
         <img src={topLogo} alt='logo' className='header__logo'/>
         </div>
         <div className='header__text-box'>
         <h1 className='heading-primary'>

            <span className='heading-primary--sub heading-primary--sub-1'> Let's explore the</span> 
            <span className='heading-primary--main heading-primary--main-1'>Wonders</span> 
            <span className='heading-primary--sub heading-primary--sub-1'> of Nature</span> 
         </h1>
         <Link2 to='/DiscoverTours'  className='btn btn--white'>Explore Our tours</Link2>
         </div>
        </div>
    )
}



    // "compile:sass": "node-sass ./src/sass/main.scss ./src/Components/style.css -w",
  // "start": "react-scripts start",
    // "build": "react-scripts build",
export default Header
