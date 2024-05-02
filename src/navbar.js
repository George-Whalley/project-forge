// Get react
import React from 'react';
// Get link to be used in the router
import {Link} from 'react-router-dom';
// Link to css file
import './navbar.css';
// Get jQuery
import $ from 'jquery';
// Font Awesomes
import { FaUser, FaHome, FaBookOpen, FaBars, FaProjectDiagram, FaAddressBook, FaFire, FaAddressCard, FaHammer } from 'react-icons/fa';

// Assemble function 
export default function Navbar(){
    // Create object to hold menu information
    var menu_options_object = [
        {name:"Home", icon:<FaHome/>, link:"/"},
        {name:"About", icon: <FaAddressCard/>, link:"/about"},
        {name:"Blog", icon:<FaProjectDiagram/>, link:"/blog"},
        {name:"Projects", icon:<FaUser/>, link:"/Projects"},
        {name:"Login", icon:<FaUser/>, link:"/login"},
    ];

    // {name:"Contacts", icon:<FaAddressBook/>, link:"/contact"},

    // Open / Close Collapsed Drop Down Menu
    var toggle_collapsed_menu = () => {
        // Get the main header element
        var h = document.getElementsByClassName("header-container");
        // Check if the 'drop-down-menu' has already been added into the DOM
        if(document.body.contains(document.getElementById("drop-down-menu")) === false){
            // Insert a container after this element
            $('.header-container').after('<div id="drop-down-menu" class="drop-down-menu"><ul id="drop-down-menu-ui"></ul></div>');
            // Loop through each item in menu options object
            for(let [value] of Object.entries(menu_options_object)){
                // Insert list item into unordered list
                $("#drop-down-menu-ui").append('<li><a href="'+ menu_options_object[value].link +'">' + menu_options_object[value].name + '</about></li>')
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

    const uncollapsed_menu = menu_options_object.map((option) =>
        <div className="menu-icon"><Link to={option.link}>{option.name}</Link></div>
    );

    // Return Statement
    return(
        <div className='header-container'>
            <div className='col left'>
                <FaHammer />
                <h1>
                    THE FORGE
                </h1>
            </div>
            <div className='col right'>
                <div className='uncollapsed header menu'>
                    {uncollapsed_menu}
                </div>              
               {collapsed_menu}
            </div>
        </div>
    )
}



// export default Navbar;