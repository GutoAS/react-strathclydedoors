import React from 'react'
import './iconsabout.css'

const IconsAbout = (props) => {
  return (
    <div className='about-icon'>
        <img src={props.icon} alt="icon" />
        <h1 className='about-h1'>{props.title}</h1>
        <p className='about-p'>{props.p}</p>
    </div>
  )
}

export default IconsAbout