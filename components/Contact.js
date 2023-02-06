import {Formik, useFormik,Field, Form, ErrorMessage } from 'formik';
import React from 'react'
import * as Yup from 'yup';

const Contact = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input className='border-black border' type="text" id="firstName" name='firstname' />
        </div>

        <div>  
          <label htmlFor="lastName">Last Name</label>
          <input className='border-black border' type="text" id="lastName" name='lastName' />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input className='border-black border' type="email" id="email" name='email' />
        </div>
          
      </form>
    </div>
  );

}

export default Contact