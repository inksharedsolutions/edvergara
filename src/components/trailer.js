import React from "react"
import ReactPlayer from 'react-player/youtube'



const Trailer = () =>{
    return(
        <>
            <section className="book-trailer">
                <div className="grid-two-columns" id="trailer-body">

                    <div className="grid-video-container">
                        <div className="player-wrapper">
                            <ReactPlayer
                                className="react-player"
                                url={"https://www.youtube.com/embed/qVkW9wIBtLo"} 
                                width="100%"
                                height="400px"
                                controls={true}
                                playIcon
                            />
                        </div>
                    </div>
                
                    
                    <div className="grid-child-content" id="content-trailer">
                        <h5>Ed Vergara</h5>
                        <h1>
                            <span>Book</span> 
                            <span>Trailer</span>
                        </h1>
                        <p>
                            Click to watch a visual presentation about the correlation
                            between the three elements; matter, space, and time.
                            Dive in and learn how these elements play a significant
                            and practical way through different periods and eras.
                        </p>
                    </div>

                </div> 
            </section>
        </>
    )
}

export default Trailer;