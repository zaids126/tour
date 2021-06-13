import React from 'react'
import photo1 from '../imgs/nat-1-large.jpg'
import photo2 from '../imgs/nat-2-large.jpg'
import photo3 from '../imgs/nat-3-large.jpg'

const AboutUs = () => {
    return (
        <section className='section-about' id='section-about'>
            <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>
               Exciting tours for adventurous and innovative people
               </h2>  
               </div>

        <div className='row'>
<div className='col-1-of-2'>
    <h3 className='heading-tertiary u-margin-bottom-small'>You're going to fall in love with nature</h3>
    <p className='paragraph'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut ad quibusdam numquam, eaque quas eos! Ex numquam aspernatur voluptas? Sequi earum cum fugiat nostrum laudantium voluptate dolor. Officia, voluptatum.
    </p>

    <h3 className='heading-tertiary u-margin-bottom-small'>Live adventures like you never have before</h3>
    <p className='paragraph'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut ad quibusdam numquam, eaque quas eos! Ex numquam aspernatur voluptas? Sequi earum cum fugiat nostrum laudantium voluptate dolor. Officia, voluptatum.
    </p>

    <a href="#LearnMore" className='btn-text'>Learn More &rarr;</a>
</div>
 

<div className='col-1-of-2'>
    <div className='composition'>
<img src={photo1} alt='forest 1' className='composition__photo composition__photo--p1'/>
<img src={[photo2]} alt='forest 2' className='composition__photo composition__photo--p2'/>
<img src={photo3} alt='forest 3' className='composition__photo composition__photo--p3'/>
</div>
</div>
</div>
           
           
        </section>
    )
}

export default AboutUs
