import React,{useState} from 'react'
import { Link as Link1} from 'react-scroll';
import * as AiIcons from "react-icons/ai";


const Navigation = () => {

    const [open, setOpen] = useState(false)

    const openNav = () => setOpen(!open)


    return (
        <div className='navigation'>

            <div className='navigation__icon'>
                <Link1 to='#' className='navigation__toggle'>
                <AiIcons.AiOutlineMenu onClick={openNav}/>
                </Link1>
            </div>

            <nav className={open ? 'navigation__nav active':'navigation__nav'} >
                <ul className='navigation__list'>
                    <li className='navigation__item'><Link1 to ='section-about' smooth={true} duration={1000} className='navigation__link' onClick={()=>setOpen(false)} >About Natural.ly</Link1></li>
                    <li className='navigation__item'><Link1 to='section-features' smooth={true} duration={1000} className='navigation__link' onClick={()=>setOpen(false)} >Your Benefits</Link1></li>
                    <li className='navigation__item'><Link1 to='section-tours' smooth={true} duration={1000} className='navigation__link' onClick={()=>setOpen(false)} >Popular Tours</Link1></li>
                    <li className='navigation__item'><Link1 to='section-stories' smooth={true} duration={1000} className='navigation__link' onClick={()=>setOpen(false)} >Stories</Link1></li>
                    <li className='navigation__item'><Link1 to='section-book' smooth={true} duration={1000} className='navigation__link' onClick={()=>setOpen(false)} >Book Now</Link1></li>
                </ul>
                {/* <div className='navigation__overlay' onClick={() => setOpen(false)}> */}
                {/* </div>     */}

            </nav>

        </div>
    )
}

export default Navigation
