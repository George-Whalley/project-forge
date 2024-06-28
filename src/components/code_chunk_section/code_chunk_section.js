// Standard
import React from 'react'
// Link to stylesheet
import './code_chunk_section.css';
// Import Code Chunk
import CODE_CHUNK from '../../components/code_chunk/code_chunk';

var code_one = `console.log('Hello World')`

var code_two = `// Set State
this.state = { 
// Array containing objects
    code_chunks: [
        { language:"js", custom_style:{background:"transparent"}, code:"console.log("Goodbye World")" }
    ]
};`

var code_three = `/* Even */ 
.css-class:nth-child(2n) {
    margin: auto;
}
/* Odd */ 
.css-class:nth-child(2n + 1) {
    margin: auto;
}`

var code_four = `/* Screen size styling */
@media (max-width: 800px) {
    .css-class{
        margin: auto;
    }
}`

var code_five = ` // Get current year
{(new Date().getFullYear())}
`

class CodeChunkSection extends React.Component {
    // Set State
    constructor(props) {
        super(props);
        this.state = {  
                    code_chunks: [
                        {language:"js", custom_style:{background:"transparent"}, code:code_one},
                        {language:"jsx", custom_style:{background:"transparent"}, code:code_two},
                        {language:"css", custom_style:{background:"transparent"}, code:code_three},
                        {language:"css", custom_style:{background:"transparent"}, code:code_four},
                        {language:"jsx", custom_style:{background:"transparent"}, code:code_five}
                    ]
        };
     }

    render() {
        // Define the class name
        return (
            <div className="code-chunk-section">
                {this.state.code_chunks.map((code, index )=> {
                    return(
                        <CODE_CHUNK language={code.language} code={code.code} custom_style={code.custom_style}/>
                    )
                })}
            </div>
        )
    }
}

export default CodeChunkSection;