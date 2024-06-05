import React, { Suspense } from 'react'

// Link to css file
import './About.css';
// Fetch Font awesomes required from libaray
import { FaUser } from 'react-icons/fa';

// Main
function About(){
    // Define a object to store the skills
    const skills = ["Front End Development", "Backend Development", "Analysis", "Testing", "Product Management", "Communication", "Client Relationships", "Lending"]
    // Return
    return(
        <div className='main-page-container about-me'>
            <div className='about-me card'>
                <div className='card-header'>
                    <h1>About Me!</h1>
                </div>
                <div className="palceholder-picture">
                    <img style={{margin:'auto',width:'100%',borderRadius:'100%'}} src='/images/chat_gpt_generated/computer_programer_profile_picture_transparent_webp.webp' alt='about profile picture'></img>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.</p>
                <div className="fact-container">
                    {skills.map((skill, index) =>
                        <div key={index}>{skill}</div>
                    )}
                </div>
                <div className='accent-card'>
                </div>
                <div className="palceholder-picture-two">
                        <img style={{margin:'auto',width:'100%'}} src='/images/chat_gpt_generated/rugby_player_scoring_webp.webp' alt='about profile picture'></img>

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