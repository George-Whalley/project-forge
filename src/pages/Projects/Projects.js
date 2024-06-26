// Standard
import React, {Component} from 'react'
// Link to stylesheet
import './Projects.css';
// Fetch Font awesomes required from libaray
import { FaCode, FaChevronUp, FaChevronDown } from 'react-icons/fa';


// COMPONENTS
// Fetch SUDOKU SOLVER
import SUDOKU_SOLVER from '../../components/sudoku_solver/sudoku_solver';
// Fetch RUNESCAPE API DATA
import RUNESCAPE_API_DATA from '../../components/runescape_api_data/runescapie_api_data';
// Fetch TASK TRACKER
import TASK_TRACKER from '../../components/task_tracker/task_tracker'
// Fetch CODE CHUNKS
import CODE_CHUNK_SECTION from '../../components/code_chunk_section/code_chunk_section';
// Fetch MOVIE WISHLIST SECTION
import MOVIE_WISHLIST_SECTION from '../../components/movive_wishlist_section/movive_wishlist_section';

class COLLAPSE_CONTAINER extends React.Component {
    // Define var to decide when to show the container
    // If false = hide
    // If true = show
    state = {
        toggle: this.props.init_collapse,
    }

    // Function that changes the var above
    // If true = false
    // If false = true
    ToggleButton() {
        // Update the state to the logical oppersite of current
        this.setState(
            { toggle: !this.state.toggle }
        );
    }

    // ? Evaulate
    // : Or
    // State = Defined by developer
    // Props passed in on the class
    render() {
        // Define the class name
        return (
            <div>
                <div className="collapse-container-header " style={this.props.header_style}>
                    <button className='collapse-icon' onClick={() => this.ToggleButton()}>
                        {this.state.toggle === false ? <FaChevronUp/> : <FaChevronDown/>}
                    </button>
                    <p>{this.props.text}</p>
                </div>
                <div>
                    {this.state.toggle === false ? <div className='collapse-container-body runescape-apis' style={this.props.body_style}>
                    {this.props.body}</div>:<></>}
                </div>
            </div>
        )
    }
}

class PROJECT extends Component {
    render(){
        return(
            <div className='main-page-container project'>
                <div className='project-me card'>
                    <div className='card-header'>
                        <div className='email-icon'>
                            <FaCode/>
                        </div>
                    </div>
                    <div className='main-container project'>
                        <COLLAPSE_CONTAINER text={"Task List"} init_collapse={false} body_style={{padding: "20px 0", display:"flex", flexWrap:"wrap", backgroundImage:"url(/images/chat_gpt_generated/code_background_picture.webp)",backgroundSize: "cover",backgroundPosition: "center center"}} body={
                            <TASK_TRACKER/>
                        }/>
                        <COLLAPSE_CONTAINER text={"Code Bytes"}  init_collapse={false} body_style={{}} body={
                            <CODE_CHUNK_SECTION/>
                        }/>
                        <COLLAPSE_CONTAINER text={"Sudoku Solver"}  init_collapse={false} body_style={{padding: "20px 0", backgroundImage:"url(/images/chat_gpt_generated/doodle_page_of_maths.png)",backgroundSize: "cover",backgroundPosition: "center center"}} body={
                            <SUDOKU_SOLVER/>
                        }/>
                        <COLLAPSE_CONTAINER text={"Movie & TV Wishlist"}  init_collapse={false} body_style={{}} body={
                            <MOVIE_WISHLIST_SECTION/>
                        }/>
                        <COLLAPSE_CONTAINER text={"Runescape API's"}  init_collapse={false} body_style={{padding: "20px 0", backgroundImage:"url(/images/chat_gpt_generated/runescape_background.webp)",backgroundSize: "cover",backgroundPosition: "center center"}} body={
                            <RUNESCAPE_API_DATA/>
                        }/>
                    </div>  
                </div>
            </div>
        )
    }
}

export default PROJECT;