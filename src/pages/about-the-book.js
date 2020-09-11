import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import FrontBook from '../../static/books/Book_Cover.png'


const ATB = (props)=>{

    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'ed-vergara',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/> 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Transcend`,
                                    spanFirst: `The 3 Elements (U= 3Ɛ)`,
                                    imgSrc: FrontBook,
                                    id:'the_gifted_one',
                                  
                                    content:
                                    `
                                    <p>
                                        Your attitude will take control and guide all the events in your life.
                                        Anything you do and know will condition what you receive. 
                                        The universe is energy. Our thoughts transform that concentration of
                                        energy creating our reality. At the core of our being, we are one
                                        with the planet earth, the universe, and the omnipresence of the Most High.
                                        Reality is both spiritual, physical, and psychological.
                                    </p> 

                                    <p>
                                       This spiritual development takes us from a state of hope--I hope--even
                                       a state of trust and security--I believe--to the next state of certainty--I know,
                                       I know, I love--The road begins, with hope, it grows and it is strengthened with
                                       faith, and is potentiated and magnified with knowledge, knowing, loving.
                                    </p>

                                    <p>
                                        "You are literally what you think of yourself."
                                        "Your beliefs are not made of realities,
                                        "Rather, your reality is being formed every day by your beliefs."
                                    </p>

                                    <p>
                                        What is the secret and the link between time, dreams, and eternity?
                                        How to learn to serve my consciousness and then find true freedom?
                                        What is the relationship between attraction, magnetism, and the
                                        alignment of energy?
                                    </p>

                                    <p>
                                        Eternity has come into your life and is waiting for you to know what
                                        to do in the next moment. The Universe is waiting for you to know
                                        which direction to follow... Only you can give it the right direction.
                                        Once again, you choose what reality you want to live in; you have to
                                        discover and realize you're most dreamed and intimate desires,
                                        only then can you develop your full potential.
                                    </p>

                                    <p>
                                        Discover how to start a time of permanent success in everything you do.
                                        For gratitude is the seed and the principle to be able to mature and grow;
                                        adversities and events in the life of each human being have a divine and
                                        angelic connection. These events prompted me to write and share these
                                        authentic personal stories and anecdotes that will reveal to you
                                        how to transcend, penetrate the celestial universe, and also
                                        connect with your Guardian Angels.
                                    </p>
                                    `,

                                    ebooks:{
                                        stratton:'https://www.stratton-press.com/books/transcend-the-3-elements/',
                                        barnes:'https://www.barnesandnoble.com/w/transcend-ed-vergara/1136405586?ean=9781643458984',
                                        amazon:'https://www.amazon.com/Transcend-3-Elements-Ed-Vergara-ebook/dp/B084Q2FC47/ref=sr_1_1?dchild=1&keywords=9781643458984&qid=1596814551&s=books&sr=1-1',
                                        spanish_amazon_link:'https://www.amazon.com/Trascender-Spanish-Ed-Vergara-ebook/dp/B08F2W5753/ref=sr_1_1?dchild=1&keywords=9781648951145&qid=1597083690&sr=8-1',
                                    },

                                    paperback:{
                                        amazon:'https://www.amazon.com/Transcend-3-Elements-Ed-Vergara/dp/1643458973/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1596814551&sr=1-1',
                                        barnes:'https://www.barnesandnoble.com/w/transcend-ed-vergara/1136405586?ean=9781643458977',
                                        booksamillion:'https://www.booksamillion.com/p/Transcend/Ed-Vergara/9781643458977?id=7714171848832',
                                        paperback_amazon_link:'https://www.amazon.com/Trascender-Ed-Vergara/dp/1648951139/ref=sr_1_1?dchild=1&keywords=9781648951138&qid=1597083707&sr=8-1',
                                    }

                                }} 
                            />

                            <nav className="booklinkBlocks">
                                <span> Spanish Version Ebook:</span>
                                <li><a rel="noopener noreferrer" target="_blank" rel="noreferrer" href="https://www.amazon.com/Trascender-Spanish-Ed-Vergara-ebook/dp/B08F2W5753/ref=sr_1_1?dchild=1&keywords=9781648951145&qid=1597083690&sr=8-1">Amazon</a></li>
                            </nav>


                            <div className="section-spanish-version">
                                <nav className="booklinkBlocks">
                                    <span> Spanish Version Paperback:</span>
                                    <li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Trascender-Ed-Vergara/dp/1648951139/ref=sr_1_1?dchild=1&keywords=9781648951138&qid=1597083707&sr=8-1">Amazon</a></li>
                                </nav>

                                <div className="commentSection" >
                                    <div id="disqus_thread">
                                        <DiscussionEmbed {...disqusConfig} />
                                    </div>
                                </div>
                            </div>

                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;