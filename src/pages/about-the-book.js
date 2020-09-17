import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import FrontBook from '../../static/books/Book_Cover.png'
import FrontBookSpanish from '../../static/books/Book_Cover_Spanish.png'


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


                             <BookInfo
                                data={{
                                    title:`Transcender`,
                                    spanFirst: `Los 3 Elementos (U= 3Ɛ)`,
                                    imgSrc: FrontBookSpanish,
                                    id:'the_gifted_one',
                                  
                                    content:
                                    `
                                        <p> 
                                            TRASCENDER...Descubre la fuerza que gobierna el Universo, ¿Cómo Funciona? 
                                        </p> 

                                        <p>
                                          Tu actitud tomará el control y guiara todos los eventos en tu vida.
                                          Cualquier cosa que hagas cotidianamente y aprendas condicionara lo que recibes.
                                          El Universo es energía. Nuestros pensamientos transforman esa concentración de
                                          energía creando nuestra realidad. En el núcleo de nuestro ser somos uno con el 
                                          planeta tierra, el universo y la omnipresencia del Altísimo. La realidad es tanto 
                                          espiritual, física, como psicológica.
                                        </p>

                                        <p>
                                            -"Tu eres, literalmente, lo que tú crees de ti mismo" - 
                                        </p>

                                        <p>
                                            Tus creencias no están hechas de realidades, 
                                        </p>

                                        <p>
                                           Sino más bien tu realidad está siendo formada cada día por tus creencias.
                                        </p>

                                        <p>
                                           ¿Cuál es el Secreto y el vínculo entre: El tiempo, los sueños y la eternidad?
                                           ¿Como aprender a servir a mi consciencia y entonces encontrar la verdadera
                                           libertad y Soberanía? ¿Cuál es la relación entre la atracción, el magnetismo
                                           y el alineamiento de la Energía? Este es un tratado de profunda fe, ciencia
                                           y filosofía, que te mostrara de forma original y sencilla; es una guía al
                                           lector que busca una conexión de los todos los elementos de: la naturaleza,
                                           el universo, el tiempo, la vida con su propia trascendencia.
                                        </p>

                                        <p>
                                            Una vez más tú eliges en qué realidad deseas vivir; tendrás que descubrir
                                            y realizar tus más soñados e íntimos deseos. Solo al conocerte así mismo
                                            podrás desarrollar tu máximo potencial, descubrirás lo inconcebible e
                                            ilimitado pues como seas en tu interior así también serás en el exterior.
                                            No habrá secreto que no te será revelado. Todo existe dentro de ti.
                                        </p>

                                        <p>
                                            La eternidad ha llegado a tu vida y está esperando por ti para saber
                                            qué hacer en el próximo momento. El Universo está esperando por ti para
                                            saber qué rumbo seguir... Solamente tú puedes darle la dirección adecuada.
                                        </p>

                                        <p>
                                            Los principios naturales del Universo son: Inmutables, Inquebrantables y Eternos. 
                                            En realidad estos principios revelan la esencia y naturaleza de su Creador.
                                            Están hechos de tal manera que son el fundamento de principios espirituales
                                            que gobiernan los estados de conciencia que rigen la conducta humana.
                                        </p>

                                        <p>
                                            Descubre como iniciar una época de éxito permanente en todo lo que haces.
                                            Agradecer es la semilla y el principio para poder madurar y crecer; Las
                                            adversidades y eventos en la vida de cada ser humano tienen una Conexión
                                            Divina que te conecta con tus ángeles guardianes. Esto sucesos me impulsaron
                                            a escribir y compartir estos auténticos relatos y anécdotas personales que te
                                            revelaran como penetrar el universo. Pues donde existe el principio y su origen
                                            también allí mismo se descubre el final.
                                        </p>
                                    `,

                                    ebooks:{
                                        stratton:'https://www.stratton-press.com/books/transcend-the-3-elements/',
                                        barnes:'https://www.barnesandnoble.com/w/trascender-ed-vergara/1137421399?ean=9781648951145',
                                        amazon:'https://www.amazon.com/Trascender-Spanish-Ed-Vergara-ebook/dp/B08F2W5753/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1597083690&sr=8-1',
                                        spanish_amazon_link:'https://www.amazon.com/Trascender-Spanish-Ed-Vergara-ebook/dp/B08F2W5753/ref=sr_1_1?dchild=1&keywords=9781648951145&qid=1597083690&sr=8-1',
                                    },

                                    paperback:{
                                        amazon:'https://www.amazon.com/Trascender-Los-Tres-elementos-Spanish/dp/1512708283/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1597083690&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/trascender-ed-vergara/1137465744?ean=9781648951138',
                                        booksamillion:'https://www.booksamillion.com/p/Trascender/Ed-Vergara/9781648951138?id=7714171848832',
                                        paperback_amazon_link:'https://www.amazon.com/Trascender-Ed-Vergara/dp/1648951139/ref=sr_1_1?dchild=1&keywords=9781648951138&qid=1597083707&sr=8-1',
                                    }

                                }} 
                            />
                    </div>	
                </main>
		 	</Layout>
		</>
	)
}


export default ATB;