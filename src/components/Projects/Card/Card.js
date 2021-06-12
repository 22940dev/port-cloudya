import React from 'react'

import { IconButton, Link } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import GitHubIcon from '@material-ui/icons/GitHub'

import './Card.css'

const Card = (props) => {
  let iconStyle = {
    color: '#ffff',
    fontSize: window.innerWidth <= 900 ? 22 : props.isSmall ? 25 : 40,
  }

  const imgName = Object.keys(props.img)

  let cardStyle = {
    backgroundColor: props.backgroundColor,
    gridColumn: props.gridColumn,
    gridRow: props.gridRow,
    backgroundImage: `url(../${props.img[imgName]})`,
  }

  return (
    <div className='card' style={cardStyle}>
      <div className='card_overlay'>
        <div className='icon_box'>
          <Link href={props.viewLink} target='_blank'>
            <IconButton>
              <VisibilityIcon style={iconStyle} />
            </IconButton>
          </Link>

          <Link href={props.gitLink} target='_blank'>
            <IconButton>
              <GitHubIcon style={iconStyle} />
            </IconButton>
          </Link>
        </div>

        <div className='infoContainer'>
          <Link href={props.viewLink} target='_blank'>
            <h2 className='project_name'>
              {/* {info ? props.about : props.name} */}
              {props.name ? props.name : null}
            </h2>
          </Link>

          {props.about ? <p className='project_about'>{props.about}</p> : null}
        </div>
      </div>
      {/* <img className='card_img' src={props.url} alt='img'/> */}
    </div>
  )
}

export default Card
