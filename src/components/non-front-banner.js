import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import {Link} from 'gatsby'
import NET from 'vanta/dist/vanta.net.min'



const NFB = (props)=>{

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


	return(
		<>
			<section className="web-banner" ref={myRef}>
	            <div className="container">
	                <div className="wrapper-ds">
	                    <span> 
	                        {props.spanFirst}
	                    </span>
	                    <h1>
	                        {props.contextHeading}
	                    </h1>
	                </div>
	            </div>
	        </section>
		</>
	)
}

export default NFB