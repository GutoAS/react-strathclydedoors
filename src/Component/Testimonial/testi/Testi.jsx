import React from "react";
// import { useEffect } from "react"; 
import  SwipeableViews  from "react-swipeable-views";
import "./testi.css";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Testi = () => {
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
 
 
  
  const testimonials = [
    {
      quote:
        "Alan and Peter went above and beyond to get me beautiful new windows in record time! So accommodating, efficient and flawless work! On top of that, they are just really nice guys that I would recommend to anyone. Thanks lads!",
      customer: "Fiona",
      position: "Customer",
    },
    {
      quote:
        "Alan and Peter went above and beyond to get me beautiful new windows in record time! So accommodating, efficient and flawless work! On top of that, they are just really nice guys that I would recommend to anyone. Thanks lads!",
      customer: "Alex",
      position: "Customer",
    },
    {
      quote:
        "Alan and Peter went above and beyond to get me beautiful new windows in record time! So accommodating, efficient and flawless work! On top of that, they are just really nice guys that I would recommend to anyone. Thanks lads!",
      customer: "Addam",
      position: "Customer",
    },
  ];

  function prevTestimonial() {
    if (currentTestimonial > 0) {
      setCurrentTestimonial(currentTestimonial - 1);
    }
  }

  function nextTestimonial() {
    if (currentTestimonial < testimonials.length - 1) {
      setCurrentTestimonial(currentTestimonial + 1);
    }
  }

  return (
    <>
      <div className="testimonial-slider">
        <GrFormPrevious
          size={45}
          className="prev-icon"
          onClick={prevTestimonial}
          disabled={currentTestimonial === 0}
        />

<SwipeableViews
      enableMouseEvents
      index={currentTestimonial}
      
      onChangeIndex={(index) => {
        setCurrentTestimonial(index);
      }}
    >


{testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <i aria-hidden="true" className="fas fa-quote-right quote-icon"></i>
            <div className="quote">
              {" "}
              {testimonials[currentTestimonial].quote}

            </div>
            <br />
            <div className="customer">
              {testimonials[currentTestimonial].customer}
            </div>
            <br />  
            <div className="position">
              {testimonials[currentTestimonial].position}
            </div>
          </div>
             ))}
        </SwipeableViews>
        <GrFormNext
          size={45}
          color="red"
          className="next-icon"
          onClick={nextTestimonial}
          disabled={currentTestimonial === testimonials.length - 1}
        />
      </div>
    </>
  );
};

export default Testi;
