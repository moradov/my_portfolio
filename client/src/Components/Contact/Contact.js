import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Contact = () => {
  const [inputsValues, SetInputsValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    msg: null,
    classType: null
  });

  const alertHulper = (msg, time, classType) => {
    setAlert({ msg, classType });
    setTimeout(() => setAlert({ msg: null, classType: null }), time);
  };
  const setUserMessage = data => {
    setLoading(true);
    axios
      .post('/api/message', data)
      .then(res => {
        setLoading(false);
        alertHulper('Your message was sent', 5000, 'success');
        SetInputsValues({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch(err => {
        setLoading(false);
        alertHulper('Something Went Wrong', 5000, 'danger');
      });
  };

  const inputChangeHund = e => {
    SetInputsValues({ ...inputsValues, [e.target.name]: e.target.value });
  };
  const inputSubmit = e => {
    e.preventDefault();
    setUserMessage(inputsValues);
  };

  return (
    <section className='contact-me' id='contact'>
      <div className='sec-content'>
        <h2>Contact</h2>
        <p>you can leave a message here if you want to work together</p>
        <form onSubmit={e => inputSubmit(e)}>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            required
            onChange={e => inputChangeHund(e)}
            disabled={loading}
            value={inputsValues.name}
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            required
            onChange={e => inputChangeHund(e)}
            disabled={loading}
            value={inputsValues.email}
          />
          <textarea
            className='inpt-msg'
            type='text'
            name='message'
            placeholder='Message'
            onChange={e => inputChangeHund(e)}
            value={inputsValues.message}
            disabled={loading}
          ></textarea>
          {alert.msg ? (
            <div className={alert.classType}> {alert.msg} </div>
          ) : null}
          <button type='submit' className='inpt-sub'>
            {loading ? 'Wait..' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
