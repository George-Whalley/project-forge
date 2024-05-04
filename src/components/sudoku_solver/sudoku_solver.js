// Standard
import React, {useState, Component} from 'react'
// Link to stylesheet
import './sudoku_solver.css';

// Create Object of input details
const input_details = [
    "input_one",
    "input_two",
    "input_three",
    "input_four",
    "input_five",
    "input_six",
    "input_severn",
    "input_eight",
    "input_nine",
]
// Create Object of block details
const block_details = [
    "block_one",
    "block_two",
    "block_three",
    "block_four",
    "block_five",
    "block_six",
    "block_severn",
    "block_eight",
    "block_nine",
]

class Sudoku_Input extends Component {

    constructor(props) {
        super(props);
        this.state = {  
                        input_details: this.props.input_details,
                    };
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      onSubmitForm() {
        console.log(this.state)
      }



    render(){
        return(     
            this.props.input_details.map(input => (
                <div>
                    <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1} value={this.state.value} onChange={this.onInputchange}  />
                </div>
            ))
        )
    }
}

class Sudoku_block extends Component{
    // Store the props in state
    state = {
        block_details: this.props.block_details,
        input_details: this.props.input_details
    }

    render(){
        return(
            this.props.block_details.map(block => (
                <div className="block-one sudoko-block" id={block}>
                    <Sudoku_Input input_details={this.props.input_details}/>
                </div>
            ))
        )
    }
}

class Sudoku_solver extends Component {
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

    // Handle Submit
    handleSubmit = (event) =>{

    }

    render(){
        return(
            <form className="sudoko-main" onSubmit={this.handleSubmit}>
                <Sudoku_block block_details={block_details} input_details={input_details}/>
                <input type="submit" value="Solve"/>
            </form>
        )
    }
}

function Page(){
    return(
    <Sudoku_solver />
    )
}



export default Page;