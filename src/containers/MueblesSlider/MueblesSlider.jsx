import React, { useEffect, useState, useRef } from "react";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import Fade from 'react-reveal/Fade'

import { muebles } from "./muebles.js"
import Mueble from "../../components/Mueble/Mueble"

import './MueblesSlider.css'

const MueblesSlider = () => {

  const [firstActiveController, setFirstActiveController] = useState(true)
  const [secondActiveController, setSecondActiveController] = useState(false)

  function prevNav() {
    if(firstActiveController === true) {
      console.log("Ya estas en el primero")
    } else {
      setFirstActiveController(true)
      setSecondActiveController(false)
    }
  }

  function nextNav() {
    if(secondActiveController === true) {
      console.log("Ya estas en el segundo")
    } else {
      setSecondActiveController(true)
      setFirstActiveController(false)
    }
  }

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  useEffect(() => {
    //noinspection
    let mySwiper; 
    mySwiper = new Swiper(".swiper-container", {
      direction: "vertical",
      loop: false,
      pagination: {
       el: '.swiper-pagination',
       type: 'bullets'
      },
      navigation: {
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      },
      parallax: true,
      speed: 1200,
      mousewheelControl: true,
    });
  }, []);

  return (
      <>
        <div className="slider-container">
          <div className="swiper-container">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper">
              {/* <!-- Slides --> */}
              {
                muebles.map((mueble, index) => (
                  <Fade bottom key={index}>
                    <div className="swiper-slide">
                      <Mueble 
                        author={mueble.author}
                        name={mueble.name}
                        description={mueble.description}
                        image={mueble.image}
                      />
                    </div>
                  </Fade>
                ))
              }
            </div>
          </div>
        </div>
        <div className="pagination">
              <button 
                className={`pagination-controller ${firstActiveController === true ? "active" : ""}`}
                ref={navigationPrevRef}  
                onClick={prevNav}
              >
                <span>01</span>
                <p>Shell Dining Chair</p>
              </button>
              <button 
                className={`pagination-controller ${secondActiveController === true ? "active" : ""}`}
                ref={navigationNextRef}
                onClick={nextNav}  
              >
                <span>02</span>
                <p>Dunes Anthrazite Black</p>
              </button>
        </div>
      </>
  );
};

export default MueblesSlider;
