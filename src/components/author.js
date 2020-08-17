import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/main_author.jpg'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-contents">

                        <p>
                           Ed Vergara has always distinguished himself for 
                           his dedication to science, art, universal history.
                           His excellent professional training has led him to be 
                           a specialist in urban planning, architecture, construction,
                           and he is also an expert in health and safety in construction
                           (OSHA) and lectures in Latin America and to all US states.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Eduardo</span>
                            <span>Vergara</span>
                        </h1>
                        
                        <span className="author-tagline">Author & Writer</span>

                     </div>

                    <div className="grid-child" id="author-image-container">
                        <img src={AuthorImg}/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;