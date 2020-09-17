import React from 'react'
import FrontBook from '../../static/books/Book_Cover.png'
import FrontBookSpanish from '../../static/books/Book_Cover_Spanish.png'
import Accordions from '../containers/accordions'

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <span className="italic-tag">
                        Read, listen, and learn in various formats
                    </span>

                    <h1>Featured Book</h1>

                    <p>
                        For your comfort, this book is published in paperback and hardcover.
                        We also have eBook and audiobook in downloadable electronic format.
                        You can listen to on your computer,
                        iPod or any other mp3 player.
                    </p>


                    <div className="grid-two-columns" id="wrapper-two-books">
                        <div className="book-wraps">
                            <img alt="english" src={FrontBook}/>
                             <p className="book-label">English Version</p>
                        </div>

                        <div className="book-wraps">
                            <img alt="spanish" src={FrontBookSpanish}/>
                            <p className="book-label">Spanish Version</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook