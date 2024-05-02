import React from 'react'
// Link to stylesheet
import './Blog.css';
// Date formating
import Moment from 'moment';
// Fetch Font awesomes required from libaray
import { FaCode, FaChevronUp, FaChevronDown, FaBookOpen } from 'react-icons/fa';

class Blog extends React.Component{
    // Set state
    constructor(props){
        super(props);
        this.state = {
            current_blogs_response: []
        }
    }

    // Fetch blogs from Mongo DB via node/express
    getBlogs() {
        console.log('Getting Blogs')
        fetch('http://localhost:9000/mongodb/get-blogs')
        .then( res => res.text())
        .then(res => {
            // Convert response to JSON object
            // JSON.parse(res)
            this.setState({
                current_blogs_response: JSON.parse(res)
            })
            console.log(this.state.current_blogs_response)
            
        })
    }

    // On Page Load
    componentDidMount() {
        this.getBlogs()
    }

    render(){

        return(
            <div className="main-page-container blog">
                <div className="header blog">
                    <div className='email-icon'>
                        <FaBookOpen/>
                    </div>
                </div>
                <div className="entries-container blog">
                    {
                        Object.keys(this.state.current_blogs_response).map((item, i) => (
                            <CollapseContainer 
                                text={this.state.current_blogs_response[item].title + " - " + this.state.current_blogs_response[item].snippet}
                                init_collapse={false} 
                                header_style={{background:"var(--accent)",margin: "auto",width: "98%",border: "",fontWeight:"bold",borderBottom:"4px solid var(--primary)",textTransform: "uppercase"}} 
                                body_style={{width:"98%", margin:"auto", border:"none", padding: "20px 0"}}
                                body={
                                        <div>
                                            <div>{this.state.current_blogs_response[item].body}</div>
                                            <div>{Moment(this.state.current_blogs_response[item].createdAt).format('DD/MM/YYYY hh:mm')}</div>
                                        </div>
                                    }
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

class CollapseContainer extends React.Component {
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
                <div className="collapse-container-header runescape-apis" style={this.props.header_style}>
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

export default Blog;