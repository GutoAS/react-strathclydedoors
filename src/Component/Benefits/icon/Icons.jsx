import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import './icon.css'

const Icons = (props) => {
  return (
    <div className="icon-box" style={{  marginBottom : "0.5rem",  padding : "0.5rem",  display : 'flex', gap : "1.5rem" }}>
        <BsFillCheckCircleFill className='check-icon' color='#1E5079' size={22}  style={{boxShadow:'#aab8c6 0px 0px 0px 9px', borderRadius : "50%" }} />
        <div className="icon-content">
            <h5 style={{color : 'black' , fontFamily : 'var(--font-family)'}}>{props.title}</h5>
        </div>
    </div>
  )
}

export default Icons