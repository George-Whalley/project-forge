// Get react
import React from 'react';
// Get link to be used in the router
import {Link} from 'react-router-dom';
// Link to css file
import './navbar.css';
// Get jQuery
import $ from 'jquery';
// Font Awesomes
import { FaUser, FaHome, FaBars, FaProjectDiagram, FaAddressCard, FaWrench } from 'react-icons/fa';

// Assemble function 
export default function Navbar(){
    // Create object to hold menu information
    var menu_options_object = [
        {name:"Home", icon:<FaHome/>, link:"/", key:"0"},
        {name:"About", icon: <FaAddressCard/>, link:"/about",key:"1"},
        {name:"Blog", icon:<FaProjectDiagram/>, link:"/blog",key:"2"},
        {name:"Projects", icon:<FaUser/>, link:"/Projects",key:"3"},
        {name:"Login", icon:<FaUser/>, link:"/login",key:"4"},
    ];

    // {name:"Contacts", icon:<FaAddressBook/>, link:"/contact"},

    // Open / Close Collapsed Drop Down Menu
    var toggle_collapsed_menu = () => {

        // Check if the 'drop-down-menu' has already been added into the DOM
        if(document.body.contains(document.getElementById("drop-down-menu")) === false){
            // Insert a container after this element
            $('.header-container').after('<div id="drop-down-menu" class="drop-down-menu"><ul id="drop-down-menu-ui"></ul></div>');
            // Loop through each item in menu options object
            for(let [value] of Object.entries(menu_options_object)){
                // Insert list item into unordered list
                $("#drop-down-menu-ui").append('<li key="'+ menu_options_object[value].name +'"><a href="'+ menu_options_object[value].link +'">' + menu_options_object[value].name + '</a></li>')
            }
            // Change the styling of the button to inset (to show it is selected)
            document.getElementById("collapsed-menu-button").style.border = "3px inset var(--accent)";
        }
        else{
            // Remove the drop down menu element
            document.getElementById("drop-down-menu").remove();
            // Change the styling of the button to outset (to show it is de-selected)
            document.getElementById("collapsed-menu-button").style.border = "3px outset var(--accent)";
        }

    }

    // Create collapsed header menu
    var collapsed_menu = [
        <div className='collapsed header menu'>
            <div id="collapsed-menu-button" className="menu-icon">
                <FaBars onClick={toggle_collapsed_menu}/>
            </div>
        </div>
    ]

    const uncollapsed_menu = menu_options_object.map((option, index) =>
        <div className="menu-icon" key={index}>
            <Link to={option.link}>{option.name}</Link>
        </div>
    );

    // Return Statement
    return(
        <div className='header-container'>
            <div className='col left'>
                <img style={{height:'100px'}} src="images/chat_gpt_generated/the_forge_black_background_removed_png.png" alt='PROJECT FORGE'></img>
            </div>
            <div className='col right'>
                <div className='uncollapsed header menu'>
                    {uncollapsed_menu }
                </div>              
               {collapsed_menu}
            </div>
        </div>
    )
}

// export default Navbar;