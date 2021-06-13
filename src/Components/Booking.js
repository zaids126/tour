import React, {useState} from 'react'


const Booking = () => {

    const [addclass, setaddclass] = useState("");
  return (
      <section className='section-books'>
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form action='#'>
          <h1>Create Account</h1>
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <button type="submit">REGISTER</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action='#'>
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
          <button className='btn btn--green btn-book'>Next Step&rarr;</button>
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
            <button
              className="ghost"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}
            >
              GO TO REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );

};


export default Booking;