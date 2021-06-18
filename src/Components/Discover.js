import React from 'react'
import { Link as Link2 } from 'react-router-dom';
import Wonder1 from '../imgs/Wonder1M.jpg';

const Discover = () => {
    return (
        <div className='discover' id='/DiscoverTours'>
            
            {/* <Link2 to= '/' className='btn btn--green'>Back</Link2> */}
            <div>
            {/* <h1 className='heading-primary--main heading-primary--main-1 discover__heading'> */}
              {/* 7 Wonders of the natural World */}
            {/* </h1> */}
            </div>
            <div className='Wonder'>
                <div className='Wonder1'>
            <img src={Wonder1} className='Wonder1__image'/> 
                 <div className='Wonder1__container'>
                     <div className='Wonder1__container-1'>
                         <div className='Wonder1__container-small'>
                    <img src={Wonder1} className='Wonder1__image-small'/> 

                         </div>

                     </div>

                     <div className='Wonder1__container-2'>

                     </div>
                        
                        </div>
                    </div>


            </div>
        </div>
    )
}

export default Discover;
