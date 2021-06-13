import React from 'react'
import '../sass/main.css'
import topLogo  from '../imgs/logowhite.PNG'

const Header = () => {
    return (
        <div className='header'>
        <div className='header__logo-box'>
         <img src={topLogo} alt='logo' className='header__logo'/>
         </div>
         <div className='header__text-box'>
         <h1 className='heading-primary'>
            <span className='heading-primary--main'>Outdoors</span> 
            <span className='heading-primary--sub'> is where life happens</span> 
         </h1>
         <a href='#DiscoverOurTours' className='btn btn--white'>Discover our tours</a>
         </div>
        </div>
    )
}



    // "compile:sass": "node-sass ./src/sass/main.scss ./src/Components/style.css -w",
  // "start": "react-scripts start",
    // "build": "react-scripts build",
export default Header
