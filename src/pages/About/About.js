import React, { Suspense } from 'react'

// Link to css file
import './About.css';
// Fetch Font awesomes required from libaray
import { FaUser } from 'react-icons/fa';

// Main
function About(){
    // Return
    return(
        <div className='about-me page-container'>
            <div className='about-me card'>
                <div className='card-header'>
                    <h1>About Me!</h1>
                </div>
                <div className="palceholder-picture">
                    <FaUser/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.</p>
                <div className="fact-container">
                    <div>
                        Development
                    </div>
                    <div>
                        Anaylsis
                    </div>
                    <div>
                        Testing
                    </div>
                    <div>
                        Product Management
                    </div>
                    <div>
                        Communication
                    </div>
                    <div>
                        Client Relationships
                    </div>
                </div>
                <div className='accent-card'>
                </div>
                <div className="palceholder-picture-two">
                        <FaUser/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}

export default About;