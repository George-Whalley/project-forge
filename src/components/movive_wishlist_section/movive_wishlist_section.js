// Standard
import React from 'react'
// Link to stylesheet
import './movive_wishlist_section.css';

class movive_wishlist_section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
                    movies: [
                        {title:"Phoneix Nights", image:"/images/movie_thumbnails/pheonix_nights.jpg", notes:["Seasons: 1 - 3", "Released: 2001-2002"]},
                        {title:"Top Gear", image:"/images/movie_thumbnails/top_gear.jpg", notes:["Seasons: 1 - 23", "Released: 2002-2022"]},
                        {title:"The Thick Of It", image:"/images/movie_thumbnails/the_thick_of_it.jpg", notes:["Seasons: 1 - 4", "Released: 2005-2012"]},
                        {title:"The Death of Stalin", image:"/images/movie_thumbnails/death_of_stalin.jpg", notes:["Movie", "Released: 2017"]},
                        {title:"The Hobbit", image:"/images/movie_thumbnails/an_unexpected_journey.jpg", notes:["An Unexpected Journey", "Released: 2012"]},
                        {title:"The Hobbit", image:"/images/movie_thumbnails/the_desolation_of_smaug.jpg", notes:["The Desolation of Smaug", "Released: 2013"]},
                        {title:"The Hobbit", image:"/images/movie_thumbnails/the_battle_of_the_five_armies.jpg", notes:["The Battle of the Five Armies", "Released: 2014"]},
                        {title:"The A-Team", image:"/images/movie_thumbnails/the_a_team.jpg", notes:["Released: 2010"]},
                        {title:"The Musketeers", image:"/images/movie_thumbnails/the_musketeers.jpg", notes:["Seasons 1 - 3","Released: 2014 - 2016"]},
                        {title:"Game of Thrones", image:"/images/movie_thumbnails/game_of_thrones.jpg", notes:["Seasons 1 - 8","Released: 2011 - 2019"]},
                        {title:"Chernobyl", image:"/images/movie_thumbnails/chernobyl.jpg", notes:["Released: 2019"]},
                        {title:"Fury", image:"/images/movie_thumbnails/fury.jpg", notes:["Released: 2014"]},
                        {title:"Top Gun: Maverick", image:"/images/movie_thumbnails/top_gun_marverick.jpg", notes:["Released: 2022"]},
                        {title:"Lord Of War", image:"/images/movie_thumbnails/lord_of_war.jpg", notes:["Released: 2005"]},
                        {title:"The Imitation Game", image:"/images/movie_thumbnails/the_imitation_game.jpg", notes:["Released: 2014"]},
                        {title:"Only Fools and Horses", image:"/images/movie_thumbnails/only_fools_and_horses.jpg", notes:["Seasons 1 - 9","Released: 1981 - 2003"]},
                        {title:"Porridge", image:"/images/movie_thumbnails/porridge.jpg", notes:["Seasons 1 - 3","Released: 1974 - 1977"]},
                        {title:"Fawlty Towers", image:"/images/movie_thumbnails/fawlty_towers.jpg", notes:["Seasons 1 - 2","Released: 1975 - 1979"]},
                        {title:"Blackadder", image:"/images/movie_thumbnails/blackadder_goes_forth.jpg", notes:["Seasons 1 - 4","Released: 1989"]},
                    ]
        };
     }
    render() {
        // Define the class name
        return (
            <div className="movie-wishlist-section">
                {this.state.movies.map((movie, index )=> {
                    return(
                        <div className="movie-wishlist-item">
                            <h1>{movie.title}</h1>
                            <img src={movie.image}></img>
                                {movie.notes.map((note, index ) => {
                                    return(
                                        <p>{note}</p>
                                    )
                                })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default movive_wishlist_section;