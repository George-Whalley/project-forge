// Standard
import React, {useState, Component} from 'react'
// Link to stylesheet
import './sudoku_solver.css';
// Import Axios
import axios from 'axios'

// Create Object of input details
const input_details = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "severn",
    "eight",
    "nine",
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

class Sudoku_solver extends Component {
    // Define var to decide when to show the container
    // If false = hide
    // If true = show
    state = {
        toggle: this.props.init_collapse,
        sudoku_values: {
            block_one_box_one: "",block_one_box_two: "",block_one_box_three: "",
            block_one_box_four: "",block_one_box_five: "",block_one_box_six: "",
            block_one_box_severn: "",block_one_box_eight: "",block_one_box_nine: "",

            block_two_box_one: "",block_two_box_two: "",block_two_box_three: "",
            block_two_box_four: "",block_two_box_five: "",block_two_box_six: "",
            block_two_box_severn: "",block_two_box_eight: "",block_two_box_nine: "",

            block_three_box_one: "",block_three_box_two: "",block_three_box_three: "",
            block_three_box_four: "",block_three_box_five: "",block_three_box_six: "",
            block_three_box_severn: "",block_three_box_eight: "",block_three_box_nine: "",

            block_four_box_one: "",block_four_box_two: "",block_four_box_three: "",
            block_four_box_four: "",block_four_box_five: "",block_four_box_six: "",
            block_four_box_severn: "",block_four_box_eight: "",block_four_box_nine: "",

            block_five_box_one: "",block_five_box_two: "",block_five_box_three: "",
            block_five_box_four: "",block_five_box_five: "",block_five_box_six: "",
            block_five_box_severn: "",block_five_box_eight: "",block_five_box_nine: "",

            block_six_box_one: "",block_six_box_two: "",block_six_box_three: "",
            block_six_box_four: "",block_six_box_five: "",block_six_box_six: "",
            block_six_box_severn: "",block_six_box_eight: "",block_six_box_nine: "",

            block_severn_box_one: "",block_severn_box_two: "",block_severn_box_three: "",
            block_severn_box_four: "",block_severn_box_five: "",block_severn_box_six: "",
            block_severn_box_severn: "",block_severn_box_eight: "",block_severn_box_nine: "",

            block_eight_box_one: "",block_eight_box_two: "",block_eight_box_three: "",
            block_eight_box_four: "",block_eight_box_five: "",block_eight_box_six: "",
            block_eight_box_severn: "",block_eight_box_eight: "",block_eight_box_nine: "",

            block_nine_box_one: "",block_nine_box_two: "",block_nine_box_three: "",
            block_nine_box_four: "",block_nine_box_five: "",block_nine_box_six: "",
            block_nine_box_severn: "",block_nine_box_eight: "",block_nine_box_nine: "",
        }
    }

    // On input into sudoku fields, update state
    updateInputs = (event) => this.setState({
        sudoku_values: {
            ...this.state.sudoku_values,
            [event.target.id]: event.target.value,
        }
    });

    // Handle Submit
    handleSubmit = (event) =>{
        event.preventDefault()
        console.log(this.state.sudoku_values)
        axios.post('http://localhost:9000/sudoku', {
                input: this.state.sudoku_values,
            })
    }

    render(){
        return(
            <form className="sudoko-main">
                {
                block_details.map(block => (
                <div className="block-one sudoko-block" id={block}>
                    {
                        input_details.map(input => (
                            <div>
                                <input id={block + "_box_" + input} type="text" className="sudoko-input-field" max="9" min="1" maxLength={1} value={this.state.value} onChange={this.updateInputs}  />
                            </div>
                        ))
                    }
                </div>
            ))
        }
                <input type="submit" value="Solve" onClick={this.handleSubmit}/>
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