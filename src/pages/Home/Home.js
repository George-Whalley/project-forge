import React from 'react'
// Link to stylesheet
import './Home.css';
import { FaWeight } from 'react-icons/fa';

function Home(){
    return(
        <div className="main-page-container">
            <div className='header home'>
                <h2>WELCOME TO</h2>
                <h1>THE FORGE</h1>
            </div>
            <div className='intro-card react' style={{color:"white",backgroundColor:"var(--secondary)"}}>
                <p>Me George</p>
            </div>
            <div className='intro-card react'>
                <div>
                    <h3>REACTIVE <br/><span style={{fontWeight:"lighter"}}>REACT.JS</span></h3>
                </div>
                <div>
                    <img src="/images/external_logos/react_gif.gif"></img>
                </div>
            </div>
            <div className='intro-card react' style={{color:"white",backgroundColor:"var(--secondary)"}}>
                <div>
                    <img src="/images/external_logos/html_gif.gif"></img>
                </div>
                <div>
                    <h3>HYPERTEXT <br/><span style={{fontWeight:"lighter"}}>HTML 5</span></h3>
                </div>
            </div>
            <div className='intro-card react'>
                <div>
                    <h3>STYLISH <br/><span style={{fontWeight:"lighter"}}>CSS</span></h3>
                </div>
                <div>
                    <img src="/images/external_logos/css_gif.gif"></img>
                </div>
            </div>
            <div className='intro-card react' style={{color:"white",backgroundColor:"var(--secondary)"}}>
                <div>
                    <img src="/images/external_logos/js_gif.gif"></img>
                </div>
                <div>
                    <h3>GENIUS <br/><span style={{fontWeight:"lighter"}}>JS</span></h3>
                </div>
            </div>
        </div>
    )
}

export default Home;