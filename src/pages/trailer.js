import React from 'react';
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import ReactPlayer from 'react-player/youtube'


const Trailer = (props) =>{
	return(
		<>
			<Layout>
				<Nav pathExt={props.path}/>
		 		<Banner
                    spanFirst={``}
                    contextHeading={`Trailer`}
                />

                <main className="trailer-section" id="trailer-section-pages">
                	<div className="container">
                	   <h1 className="heading-section-trailer">The 3 Elements</h1>
                	   <div className="player-wrapper" id="video-section-author">
                            <ReactPlayer
                                className="react-player"
                                url={"https://www.youtube.com/embed/qVkW9wIBtLo"}
                                width="100%"
                                height="400px"
                                controls={true}
                                playIcon
                            />
                        </div>

                        <div className="section-content-info">
                            <p>
                                Click to watch a visual presentation about the correlation
                                between the three elements; matter, space, and time.
                                Dive in and learn how these elements play a significant
                                and practical way through different periods and eras.
                            </p>
                        </div>
                	</div>
                </main>
			</Layout>
		</>
	)
}

export default Trailer;