import React from 'react'
import Icon from '../Icon/Icon'
import Form from '../Form/Form'
import yahya from '../../images/yahya.jpg'

import Grid from '@material-ui/core/Grid'

import './Footer.css'

const Footer = (props) => {
  return (
    <div className='footer' id='about'>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div
            data-aos='fade-in'
            data-aos-easing='ease-in-out'
            data-aos-once={true}
            data-aos-duration={1500}
            className='img_container' style={{backgroundImage:`url(${yahya})`}}></div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div
            data-aos='fade-up'
            data-aos-easing='ease-in-out'
            data-aos-once={true}
            data-aos-delay={props.duration}
            data-aos-duration={800}
            className='about_container'>
            <p className='about_info'>
              I'm Mohammad yahya, A second year Engineering student, while
              pursuing Engineering i made dozens of projects using React.js,
              Node.js, Express, mongoDb, mongoose, jwt and multiple javascript
              libraries. I use various tools for designing and styling websites
              such as Fimga, Adobe photoshop, Materialui, Bootstrap, SCSS. I
              believe programming is not about getting a good pay job, it's
              about transforming your ideas into reality and that's what set's
              me apart from others <br></br>
              If you are interested in my work or if you like to collaborate or
              just say hello, feel free to contact me.
            </p>
            <Icon size='small' section='footer' />
            <div className='contact_container'>
              <div className='contact_info'>
                <h4 className='contact_mail'>MAIL: yahya01work@gmail.com</h4>
                <h4 className='contact_mail'>MOBILE PHONE: +91 9810896720</h4>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      {/* contact box */}

      {/* about box */}

      {/* form */}

      <Form />

      <p className='copyright'>
        &#169;Designed and Develpoed by Mohammad Yahya
      </p>
    </div>
  )
}

export default Footer
