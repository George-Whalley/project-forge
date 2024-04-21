import React from 'react'

// Link to css file
import './login.css';

function About(){
    //fetch('Access-Control-Allow-Origin','http://localhost:8010/proxy/secure.runescape.com/m=avatar-rs/Homados/chat.png')
    //.then(response => response.json())
    //.then(data => console.log(data));

    fetch('https://cors-anywhere.herokuapp.com/http://secure.runescape.com/m=hiscore/index_lite.ws?player=Homados', {
        mode: 'no-cors' // 'cors' by default
    })
    .then(function(response) {
        //response.header("Access-Control-Allow-Origin", "*");
        //response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
        console.log(response.rank)
    });
    //.then(response => response.json())
    //.then(data => console.log(data));

    return(
        <div>
            <h1>About Me!</h1>
        </div>
    )
}

export default About;