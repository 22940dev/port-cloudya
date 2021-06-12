import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import CircularProgress from '@material-ui/core/CircularProgress'
import Backdrop from '@material-ui/core/Backdrop'

import './Form.css'

const Form = () => {
  const [showLoader, setShowLoader] = useState(false)

  const submitHandler = async (e) => {
    try {
      e.preventDefault()
      setShowLoader(true)
      const result = await emailjs.sendForm(
        'service_0zh9026',
        'template_jwxmzt9',
        e.target,
        'user_sQAzV5TSzEF8mgproJKTN'
      )
      setShowLoader(false)
      e.target.reset()
      alert('Email have been successfully sent')
    } catch (error) {
      setShowLoader(false)
      alert('sorry some error occurred')
    }
  }

  return (
    <div className='form_container'>
      {showLoader && (
        <Backdrop open={showLoader}>
          <CircularProgress
            thickness={2}
            style={{
              color: '#fff',
              width: '25rem',
              height: '25rem',
            }}
          />
        </Backdrop>
      )}{' '}
      <h3 className='form_heading about_heading'>let's get in contact.</h3>
      <form className='form' onSubmit={submitHandler}>
        <input
          className='input'
          type='text'
          placeholder='Name'
          name='from_name'
        />
        <input
          className='input'
          type='text'
          placeholder='E-Mail'
          name='user_email'
        />
        <input
          className='input'
          type='text'
          placeholder='Subject'
          name='subject'
        />
        <textarea
          className='textarea'
          placeholder='Message'
          name='message'></textarea>
        <button className='form_button' type='submit'>
          SEND
        </button>
      </form>
    </div>
  )
}

export default Form
