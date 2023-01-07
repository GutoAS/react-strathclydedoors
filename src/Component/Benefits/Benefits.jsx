import React from 'react'
import './benefits.css'
import {land_three} from '../../Utils/landing-page-assets/image'
import Icons from './icon/Icons'

const Benefits = () => {
  return (
   <>
   <div className="benefits">
    <div className="benefits-content">
        <p className='benefits-p'>Benefits You Get</p>
        <h1>Why You Should Choose Strathclyde Doors?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quasi! Reiciendis qui nisi illum obcaecati?</p>
        <Icons title = "Quick Installation"/>
        <Icons title = "5 Star Rated on Facebook & Google"/>
        <Icons title = "Quality products form Veka and Rehau"/>
        <Icons title = "Disclosure Scotland vetted Installers"/>
        <Icons title = "Glazing options to suit your budget"/>
        <Icons title = "10 years Free maintenance on everything (Not just frames.)"/>
        <Icons title = "Payment options available"/>
    </div>
    <div className="benefits-img">
        <img src={land_three} alt="" />
    </div>
   </div>
   </>
  )
}

export default Benefits