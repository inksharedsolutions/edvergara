import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import {Link} from 'gatsby'
import NET from 'vanta/dist/vanta.net.min'



const Banner = ()=>{

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
          el: myRef.current,
          THREE: THREE, 
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x4d4d4d,
          backgroundColor: 0x222222,
          points: 11.00,
          maxDistance: 25.00,
          spacing: 16.00
      }))
    }
    return () => {
      //Destroy Effects..
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])


    return (
        <>
            <section className="banner-section" ref={myRef}>
                <div className="container-gt">
                    <div className="two-grid-columns">
                    
                        <div className="grid-child-elem">
                        </div> 

                        <div className="grid-child-elem">
                            <div className="banner-text">

                                <h1>
                                    Discover
                                </h1>

                                <p>
                                    <span>The force that governs the</span>
                                    <span>universe and how it works.</span>
                                </p>

                               
                                <Link to="/about-the-book">
                                    Read more
                                </Link> 
                              
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;