// Standard
import React, {useState, Component} from 'react'
// Link to stylesheet
import './sudoku_solver.css';

class Sudoku_solver extends Component {
    render(){
        return(
                <div className="sudoko-main">
                        <div className="block-one sudoko-block">
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1} />
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1} />
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                        </div>
                        <div className="block-two sudoko-block">
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                        </div>
                        <div className="block-three sudoko-block">
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                        </div>
                        <div className="block-four sudoko-block">
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                        </div>
                        <div className="block-five sudoko-block">
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                        </div>
                        <div className="block-six sudoko-block">
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                        </div>
                        <div className="block-severn sudoko-block">
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                        </div>
                        <div className="block-eight sudoko-block">
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                        </div>
                        <div className="block-nine sudoko-block">
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                            <input type="text" className="sudoko-input-field" max="9" min="1" maxLength={1}/>
                        </div>
                        <input type="submit" value="Submit"/>
                    </div>
        )
    }
}

export default Sudoku_solver;