import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.png'

const ATB = (props)=>{
	
	return (
		<> 
		 	<Layout>
                 
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`} 
                 contextHeading={`Author`}/>
                  
		 		<div className="container">
				    <section className="body-author-contents columns">
                         
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    In order for your faith to work, you have to walk in Love. 
                                    IF YOU FOLLOW THESE 10 GUIDELINES, you’ll 
                                    receive more answers to your prayers, receive more
                                    money, receive your healing, receive more love,
                                    receive more power, receive more faith, and receive more
                                    of everything God wants you to have.
                                </h4>
                                
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                               Ed Vergara has always distinguished himself for his dedication
                               to science, art, universal history. His excellent professional
                               training has led him to be a specialist in urban planning, 
                               architecture, construction, and he is also an expert in health
                               and safety in construction (OSHA) and lectures in Latin America
                               and to all US states.  Ed believes that history is the foundation
                               for knowledge of all sciences and that history is the best tool for
                               knowledge of the present and even the future.  
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Ed Vergara</span>
                                </span>
                            </p>
                            
                        </article>

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;