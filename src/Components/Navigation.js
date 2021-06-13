import React,{useState} from 'react'
import { Link } from 'react-scroll';
import * as AiIcons from "react-icons/ai";


const Navigation = () => {

    const [open, setOpen] = useState(false)

    const openNav = () => setOpen(!open)


    return (
        <div className='navigation'>

            <div className='navigation__icon'>
                <Link href='#' className='navigation__toggle'>
                <AiIcons.AiOutlineMenu onClick={openNav}/>
                </Link>
            </div>

            <nav className={open ? 'navigation__nav active':'navigation__nav'} >
                <ul className='navigation__list'>
                    <li className='navigation__item'><Link to ='section-about' smooth={true} duration={1000} className='navigation__link' onClick={()=>setOpen(false)} >About Natural.ly</Link></li>
                    <li className='navigation__item'><Link to='section-features' smooth={true} duration={1000} className='navigation__link' onClick={()=>setOpen(false)} >Your Benefits</Link></li>
                    <li className='navigation__item'><Link to='section-tours' smooth={true} duration={1000} className='navigation__link' onClick={()=>setOpen(false)} >Popular Tours</Link></li>
                    <li className='navigation__item'><Link to='section-stories' smooth={true} duration={1000} className='navigation__link' onClick={()=>setOpen(false)} >Stories</Link></li>
                    <li className='navigation__item'><Link to='section-book' smooth={true} duration={1000} className='navigation__link' onClick={()=>setOpen(false)} >Book Now</Link></li>
                </ul>
                {/* <div className='navigation__overlay' onClick={() => setOpen(false)}> */}
                {/* </div>     */}

            </nav>

        </div>
    )
}

export default Navigation
