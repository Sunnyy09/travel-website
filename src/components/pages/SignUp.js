import React from 'react';
import '../../App.css';


export default function SignUp() {
  return (
    <div className='form-modal__container'>
      <div className='form-modal__wrapper' >
        <div className='sign-up'>
          <img src='/images/img-11.jpg' alt='Sign-up'></img>
        </div>
        <div className='sign-up__container'>
          <h2>Sign Up</h2>
          <form className='sign-up__form'>
            <label>Email</label> <br></br>
            <input type='text' placeholder='example.gmail.com'></input><br></br>
            <label>Password</label> <br></br>
            <input type='password' placeholder='password'></input><br></br>
            <button type='submit' className='btn-sign'>Sign Up</button>
          </form>

          <div className='account__text'>
            <p className='have-account'>Have an account? <span>Log In here </span></p>
          </div>
        </div>

      </div>
    </div>
  );
}