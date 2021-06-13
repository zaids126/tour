import React from 'react';
import circleimg from '../imgs/nat-8.jpg';
import circleimg1 from '../imgs/nat-9.jpg';
import video1 from '../imgs/video.mp4';
import video2 from '../imgs/video.webm';

const Section = () => {
    return (
        <section className='section-stories' id='section-stories'>
            <div className='bg-video'> 
                <video className='bg-video__content' autoPlay muted loop>
                <source src={video1} type='video/mp4'/>
                <source src={video2} type='video/webm'/>
                Your browser is not supported
                </video>
</div>

              <div  className='u-center-text u-margin-bottom-big'>
                  <h2 className='heading-secondary'>
                      We make people genuinely happy
                  </h2>
                  
            </div>
                  <div className='row'>
                    <div className='story'>
                        <figure className='story__shape'>
                            
                                <img src={circleimg} alt='person on a tour' className='story__imgsbox'/>
            
                            <figcaption className='story__caption'>Sia Furler</figcaption>
                        </figure>
                        <div className='story__text'>
                            <h3 className='heading-tertiary u-margin-bottom-small'> One of the best adventureous place to visit</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officia praesentium alias explicabo facere. Minus consectetur corporis cumque perferendis nesciunt tempora magnam maiores totam labore optio eligendi quos, delectus repudiandae.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quam dolor, quae voluptatum. Quis iusto culpa vel. 
                            </p>
                        </div>
                    </div>

                      </div> 
                      <div className='row'>
                    <div className='story'>
                        <figure className='story__shape'>
                            
                                <img src={circleimg1} alt='person on a tour' className='story__imgsbox'/>
            
                            <figcaption className='story__caption'>Niall Horan</figcaption>
                        </figure>
                        <div className='story__text'>
                            <h3 className='heading-tertiary u-margin-bottom-small'>I had the best week ever on this vacay!</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officia praesentium alias explicabo facere. Minus consectetur corporis cumque perferendis nesciunt tempora magnam maiores totam labore optio eligendi quos, delectus repudiandae.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quam dolor, quae voluptatum. Quis iusto culpa vel. 
                            </p>
                        </div>
                    </div>

                      </div>

                      <div className='u-center-text u-margin-top-huge'>

<a href='#ReadAllStories' className='btn-text'>Read all stories</a>

</div>
        </section>

         
    )
}

export default Section
