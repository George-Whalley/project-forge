// Standard
import React from 'react'
// Link to stylesheet
import './code_chunk.css';
// Fetch Font awesomes required from libaray
import { FaCog } from 'react-icons/fa';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula, dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a sample HTML code.</p>
</body>
</html>
`;

const reactJsCode = `state = {
    toggle: this.props.init_collapse
}`;

const reactJsCodeTwo = `<COLLAPSE_CONTAINER text={"Some Text"}  init_collapse={true} body_style={{color:"black"}} body={
    <COMPONENT/>
}/>`;

function CODE_CHUNK() {
    return(
        <div style={{background:"#4a4a4a",height:"100%",display:"flex",flexWrap:"wrap"}}>
            <div className="code-chunk-container">
                <div className="code-chunk-header">
                    <FaCog style={{color:"grey"}}/>
                    <span style={{margin:"0 10px"}}>JS</span>
                </div>
                <SyntaxHighlighter language="javascript" style={darcula} customStyle={{background:"transparent"}}>
                    const time = new Date();
                    // Comment
                </SyntaxHighlighter>
            </div>
            <div className="code-chunk-container">
                <div className="code-chunk-header">
                    <FaCog style={{color:"grey"}}/>
                    <span style={{margin:"0 10px"}}>JSX</span>
                </div>
                <SyntaxHighlighter language="jsx" style={darcula} customStyle={{background:"transparent"}}>
                {reactJsCode}
                </SyntaxHighlighter>
            </div>
            <div className="code-chunk-container">
                <div className="code-chunk-header">
                    <FaCog style={{color:"grey"}}/>
                    <span style={{margin:"0 10px"}}>HTML</span>
                </div>
                <SyntaxHighlighter language="html" style={darcula} customStyle={{background:"transparent"}}>
                    {htmlCode}
                </SyntaxHighlighter>
            </div>
            <div className="code-chunk-container">
                <div className="code-chunk-header">
                    <FaCog style={{color:"grey"}}/>
                    <span style={{margin:"0 10px"}}>JSX</span>
                </div>
                <SyntaxHighlighter language="jsx" style={darcula} customStyle={{background:"transparent"}}>
                {reactJsCodeTwo}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}



export default CODE_CHUNK;