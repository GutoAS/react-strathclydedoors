import React from 'react'
import './about.css'
import IconsAbout from './Icons/IconsAbout'
import { people, project_complete, satisfied_customer } from '../../Utils/landing-page-assets/image'
const About = () => {
  return (
    <div className='about'>
        <IconsAbout  icon= {people} title= "100+" p="Professional Team" />
        <div   className='border-1'></div>
        <IconsAbout  icon= {project_complete} title= "800+" p="Projects Completed" />
        <div className='border-2' ></div>
        <IconsAbout    icon= {satisfied_customer} title= "560+" p="Satisfied Customer"/>
    </div>
  )
}

export default About