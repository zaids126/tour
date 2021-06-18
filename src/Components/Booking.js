import React, {useState,useEffect} from 'react';
// import Fetch from './Fetch';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {GrLocation,GrLocationPin} from 'react-icons/gr';

import BigBus from '../imgs/BigBus.jpg'
import MiniBus from '../imgs/MiniBus.jpg'
import Car from '../imgs/Car.jpg'
import Boat from '../imgs/Boat.jpg'
import Popup from './Popup';



const Booking = () => {

    const [buttonPopup, setButtonPopup]=useState(false);
    const [addclass, setaddclass] = useState("");
    const [selectedDate, setselectedDate] = useState("");
    const [timedPopup, setTimedPopup] = useState(false);



//   useEffect(() => {

//     setTimeout(() => {
//       setTimedPopup(true);
//     } ,3000)
//   },[]

// )

    const submitHandler = (e) => {
      e.preventDefault()
    }
  return (
      <section className='section-books'>
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form onSubmit={submitHandler}>
          <div className='form__group'>

            <h3>When are you planning to visit?</h3>

          </div>


          <div className='form__group'>
            <DatePicker selected={selectedDate} onChange={date =>   setselectedDate(date)}
              dateFormat='dd/MM/yyyy'
              minDate={new Date()}
            />
          </div>

          <div className='form__group'>

        <h3>Which tours are you most interested in?</h3>
        <div>
        <input type="checkbox" id="7won" name="7W" value="7W"/>
        <label id='7won'>7 Wonders Tour</label>
        </div>
        <div>
        <input type="checkbox" id="Sight" name="ST" value="ST1"/>
        <label id='Sight'>Sightseeing Tour</label>
        </div>
        <div>
        <input type="checkbox" id="Shore" name="SH" value="SH1"/>
        <label id='Shore'>Shore Excrusion Tours</label>
        </div>
        <div>
        <input type="checkbox" id="Adv" name="AandS" value="AandS1"/>
        <label id='Adv'>Adventure or Sporting Tour</label>
        </div>
        </div>

        <div className='form__group'>

         <div className='dropdown'>
         <button className='dropdown__btn'>Which type of vehicle?</button>
          <div className='dropdown__content'>

            <a href='#car'>
          <img src={Car} className='image__selector'/>
            Car
            </a>

            <a href='#'>
          <img src={Boat} className='image__selector'/>
            Boat
            </a>


            <a href='#'>
          <img src={MiniBus} className='image__selector'/>
            Mini Bus
            </a>


            <a href='#'>
          <img src={BigBus} className='image__selector'/>
            Big Bus
            </a>
{/*             
          <input type='radio' className='form__radio-input image__part' id='Car' name='size' />
                <label htmlFor='Car' className='form__radio-label '><span className='form__radio-but'>
          <img src={Car} className='image__selector'/></span>
          </label>


        
          <input type='radio' className='form__radio-input image__part' id='Boat' name='size' />
                <label htmlFor='Boat' className='form__radio-label image__radio'><span className='form__radio-but'>
                 <img src={Boat} className='image__selector'/> 

                  </span>         
                 </label>



         <input type='radio' className='form__radio-input image__part' id='minibus' name='size' />
                <label htmlFor='minibus' className='form__radio-label image__radio'><span className='form__radio-but'>

                <img src={MiniBus} className='image__selector'/> 

                </span>
                              </label>  



        <input type='radio' className='form__radio-input image__part' id='bigbus' name='size' />
                <label htmlFor='bigbus' className='form__radio-label image__radio'><span className='form__radio-but'>

                  <img src={BigBus} className='image__selector' />
                </span>
                 </label> */}

          </div>

          </div>
    </div>
          <button className='btn' onClick={() => setButtonPopup(true)}>REGISTER</button>

          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <h1>My Popup</h1>
    </Popup>
      
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
            <div className='u-margin-bottom-medium u-margin-top-medium'>
          <h2 className='heading-secondary heading-secondary-booking'>Start Booking Now</h2>
          </div>
          <div className='form__group'>
          <input type="text" className='form__input' placeholder="Full Name" id='name' required />
          <label htmlFor='name' className='form__label'>Full Name</label>
          </div>
          <div className='form__group'>
          <input type="email" className='form__input' placeholder="Email address" id='email' required />
          <label htmlFor='email' className='form__label'>Email address</label>
          </div>
          <div className='form__group'>
              <div className='form__radio-group'>
                <input type='radio' className='form__radio-input' id='solo' name='size' />
                <label htmlFor='solo' className='form__radio-label'><span className='form__radio-button'></span>Solo Tour</label>

              </div>

          </div>
          <div className='form__group'>
              <div className='form__radio-group'>
                <input type='radio' className='form__radio-input' id='group' name='size' />
                <label htmlFor='group' className='form__radio-label'><span className='form__radio-button'></span>Group Tour</label>

              </div>

          </div>
          <div className='form__group'>
          <button className='btn btn--green btn-book ' onClick={() => setaddclass("right-panel-active")} >Next Step&rarr;</button>
          </div>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <button
              className="ghost"
              id="signIn"
              onClick={() => setaddclass("")}
            >
              GO TO LOGIN
            </button>
          </div>
          <div className="overlay-panel overlay-right">

            <h2>Complete your booking in just 2 steps</h2>
            {/* <button
              className="ghost"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}
            >
              GO TO REGISTER
            </button> */}
          </div>
        </div>
      </div>
    </div>
    </section>
  );

};


export default Booking;





// 7wonders 7 diff themes and colors and font 
// change the explore page





