import React, { useState, useEffect } from 'react'
import Card from './Card/Card'
import './Projects.css'

import { desktopCardList, mobileCardList } from './projectsListIndex'

const Projects = (props) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  let cardList = desktopCardList
  if (dimensions.width <= 900) {
    cardList = mobileCardList
  }

  return (
    <div className='cards_container' id='projects'>
      {/* <Card 
        about= 'tate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        name="Portfolio website"
        visibility="visible"
        url='https://handsontable.com/blog/wp-content/uploads/2018/07/best-resources-to-learn-javascript.png'    
        /> */}
      {cardList.map((card, index) => (
        <Card
          key={card.name}
          viewLink={card.viewLink}
          about={card.info}
          name={card.name}
          isSmall={card.isSmall}
          backgroundColor='#ececec'
          gridRow={card.gridRow}
          gridColumn={card.gridColumn}
          img={card.imgUrl}
          gitLink={card.gitLink}
        />
      ))}
    </div>
  )
}

export default Projects
