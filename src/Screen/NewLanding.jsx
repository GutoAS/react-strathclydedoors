import React from 'react'
import About from '../Component/About/About'
import Benefits from '../Component/Benefits/Benefits'
import Calltoaction from '../Component/CalltoAction/Calltoaction'
import Diff from '../Component/Diff/Diff'
import Hero from '../Component/Hero/Hero'
import Projects from '../Component/Projects/Projects'
import Quality from '../Component/Qualitites/Quality'
import Services from '../Component/Services/Services'
// import Testi from '../Component/Testimonial/testi/Testi'
import TestiBox from '../Component/Testimonial/TestiBox'


const NewLanding = () => {
  return (
   <>
   <Hero/>
   <Services/>
   <Benefits/>
   <Projects/>
   <Quality/>
   <Diff/>
   <TestiBox/>
   <About/>
   <Calltoaction/>
   </>
  )
}

export default NewLanding