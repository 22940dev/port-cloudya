import React from 'react'

import './Icon.css'

import { FiGithub } from 'react-icons/fi'
import {ImWhatsapp} from 'react-icons/im'
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'

import { Link } from '@material-ui/core'

const Icon = (props) => {
  let iconBoxClasses =
    props.size === 'large' ? ['icon', 'icon--large'] : ['icon', 'icon--small']
  let iconStyleClass =
    props.size === 'large' ? 'largeIconStyle' : 'smallIconStyle'

  const iconsArray = [
    {
      iconName: 'instagram',
      icon: <FaInstagram className={iconStyleClass} />,
      link: 'https://www.instagram.com/mohd__yahya/',
    },
    {
      iconName: 'linkedin',
      icon: <FaLinkedinIn className={iconStyleClass} />,
      link: 'https://www.linkedin.com/in/mohd-yahya-194850200',
    },
    {
      iconName: 'github',
      icon: <FiGithub className={iconStyleClass} />,
      link: 'https://github.com/yahya-cloud',
    },
    {
      iconName: 'whatsapp',
      icon: <ImWhatsapp className={iconStyleClass} />,
      link: 'https://wa.me/+919810896720',
    },
  ]
  return (
    <div className='icon_container'>
      {iconsArray.map((el) => (
        <Link
          href={`${el.link}`}
          target='_blank'
          className={el.iconName + ' ' + iconBoxClasses.join(' ')}>
          {el.icon}
          <div className='toolTip'>
            {el.iconName.slice(0, 1).toUpperCase() + el.iconName.slice(1)}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Icon
