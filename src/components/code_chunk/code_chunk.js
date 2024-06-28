// Standard
import React from 'react'
// Link to stylesheet
import './code_chunk.css';
// Fetch Font awesomes required from libaray
import { FaCog } from 'react-icons/fa';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula, dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

class CodeChunk extends React.Component {
    // Takes in
    // 1. Language
    // 2. Code (String)
    // 3. Style (Darcula)
    // 4. Custom Style
    render() {
        // Define the class name
        return (
            <div className="code-chunk-container">
                <div className="code-chunk-header">
                    <FaCog style={{color:"grey"}}/>
                    <span style={{margin:"0 10px", textTransform:"uppercase"}}>{this.props.language}</span>
                </div>
                <SyntaxHighlighter language={this.props.language} style={darcula} customStyle={this.props.custom_style}>
                    {this.props.code}
                </SyntaxHighlighter>
            </div>
        )
    }
}

export default CodeChunk;