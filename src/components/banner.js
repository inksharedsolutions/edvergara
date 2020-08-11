import React from 'react'
import {Link} from 'gatsby'


const Banner = ()=>{
    return (
        <>
            <section className="banner-section">
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