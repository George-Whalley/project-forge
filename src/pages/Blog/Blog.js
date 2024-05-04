import React from 'react'
// Link to stylesheet
import './Blog.css';
// Date formating
import Moment from 'moment';
// Fetch Font awesomes required from libaray
import { FaCode, FaChevronUp, FaChevronDown, FaBookOpen } from 'react-icons/fa';
// Import Axios
import axios from 'axios'

class Blog extends React.Component{
    // -------------------------------------------------------------------------------------------------------
    // SET STATE
    // -------------------------------------------------------------------------------------------------------
    constructor(props){
        super(props);
        this.state = {
            current_blogs_response: [], // Store blogs returned from DB
            user: JSON.parse(localStorage.getItem('user')), // Get user logged in
            create_blog: { // Object for creating a blog
                title: '', 
                snippet: '',
                body: ''
            },
            edit_blog: {
                id: '',
                title: '',
                snippet: '',
                body: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this); // makes the state referenceable in the handle submit function
    }
    // -------------------------------------------------------------------------------------------------------

    // -------------------------------------------------------------------------------------------------------
    // Fetch blogs from Mongo DB via node/express
    // -------------------------------------------------------------------------------------------------------
    getBlogs() {
        const fetchData = async () => { 
            await fetch('http://localhost:9000/mongodb/get-blogs')
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
        fetchData();
    }
    // -------------------------------------------------------------------------------------------------------

    // -------------------------------------------------------------------------------------------------------
    // On Page Load
    // -------------------------------------------------------------------------------------------------------
    componentDidMount() {
        this.getBlogs()
    }
    // -------------------------------------------------------------------------------------------------------

    // -------------------------------------------------------------------------------------------------------
    // CREATE BLOG STATE UPDATE
    // -------------------------------------------------------------------------------------------------------
    onChange = (event) => this.setState({ 
        create_blog: {
            ...this.state.create_blog,
            [event.target.name]: event.target.value,
        }
    }); 
    // -------------------------------------------------------------------------------------------------------

    // -------------------------------------------------------------------------------------------------------
    // CREATE BLOG SUBMIT API
    // -------------------------------------------------------------------------------------------------------
    // On change of the input value, update the sate
    handleSubmit(event) {
        event.preventDefault()
        // console.log("Blog Title: " + this.state.create_blog.title)
        // console.log("Blog Snippet: " + this.state.create_blog.snippet)
        // console.log("Blog Body: " + this.state.create_blog.body)
        if(this.state.create_blog.title && this.state.create_blog.snippet && this.state.create_blog.body){
            axios.post('http://localhost:9000/mongodb/post-blog', {
                title: this.state.create_blog.title,
                snippet: this.state.create_blog.snippet, 
                body: this.state.create_blog.body
            })
            .then(
                result => {
                    console.log(result)
                },
                this.getBlogs()
            )
            .catch(err => console.log(err))
        }
    }
    // -------------------------------------------------------------------------------------------------------


    // -------------------------------------------------------------------------------------------------------
    // UPDATE FIND OBJ ID SELECTOR
    // -------------------------------------------------------------------------------------------------------
    updateEditObject = (event) => this.setState({
        edit_blog: {
            id: event.target.value
        }
    })
    // -------------------------------------------------------------------------------------------------------
    
    // -------------------------------------------------------------------------------------------------------
    // UPDATE EDIT STATE BASED ON INPUT
    // -------------------------------------------------------------------------------------------------------
    updateEditObjectInputs = (event) => this.setState({
        edit_blog: {
            ...this.state.edit_blog,
            [event.target.name]: event.target.value,
        }
    });
    // -------------------------------------------------------------------------------------------------------

    // -------------------------------------------------------------------------------------------------------
    // FIND OBJ API
    // -------------------------------------------------------------------------------------------------------
    findObject = (event) =>{
        event.preventDefault()
        console.log([this.state.edit_blog.id])
        axios.post('http://localhost:9000/mongodb/find-blog', {
                id: this.state.edit_blog.id,
            })
            .then(
                result => {
                    console.log(result.data)    
                    this.setState({
                        edit_blog:{
                            ...this.state.edit_blog,
                            title: result.data.title,
                            snippet: result.data.snippet,
                            body: result.data.body
                        }
                    })
                    console.log(this.state.edit_blog.id)
                    console.log(this.state.edit_blog.title)
                    console.log(this.state.edit_blog.body)
                    console.log(this.state.edit_blog.snippet)
                },
            )
            .catch(err => console.log(err))
    }
    // -------------------------------------------------------------------------------------------------------

    // -------------------------------------------------------------------------------------------------------
    // UPDATE OBJ API
    // -------------------------------------------------------------------------------------------------------
    updatObject = (event) => {
        event.preventDefault()
        console.log(this.state.edit_blog.id)
        console.log(this.state.edit_blog.title)
        console.log(this.state.edit_blog.body)
        console.log(this.state.edit_blog.snippet)
        axios.post('http://localhost:9000/mongodb/update-blog', {
            id: this.state.edit_blog.id,
            title: this.state.edit_blog.title,
            snippet: this.state.edit_blog.snippet,
            body: this.state.edit_blog.body
        })
        .then(
            result => {
                console.log(result.data)    
            },
        )
        .catch(err => console.log(err))
    }
    // -------------------------------------------------------------------------------------------------------

    // -------------------------------------------------------------------------------------------------------
    // DELETE OBJ API
    // -------------------------------------------------------------------------------------------------------
    deleteObject = (event) => {
        event.preventDefault()
        console.log(this.state.edit_blog.id)
        axios.post('http://localhost:9000/mongodb/delete-blog', {
            id: this.state.edit_blog.id,
        })
        .then(
            result => {
                console.log(result.data)    
            },
        )
        .catch(err => console.log(err))
    }
    // -------------------------------------------------------------------------------------------------------

    // -------------------------------------------------------------------------------------------------------
    // RENDER
    // -------------------------------------------------------------------------------------------------------
    render(){
        // Create blog HTML
        let create_blog_entry = []
        // Edit Blog HTML
        let edit_blog_entry = []
        // Check if there is a user logged in
        if(this.state.user == "Admin"){
            create_blog_entry = [
                <div className="post-entry-container blog">
                    Submit A Blog
                    <form onSubmit={this.handleSubmit}>
                            <input id='blog_title' name='title' type='text' placeholder='- Blog Title -' onChange={this.onChange}/>
                            <input id='blog_snippet' name='snippet' type='text' placeholder='- Blog Snippet -' onChange={this.onChange}/>
                            <textarea id='blog_body' name='body' onChange={this.onChange} placeholder='- Blog Body -'></textarea>
                            <input type="submit" value="Submit"/>
                    </form>
                </div>
            ]
            edit_blog_entry = [
                <div className='edit-entry-container blog'>
                    Edit A Blog
                    <form>
                        <div className='edit-find-object-selector-container'>
                            <select id='edit_blog_selector' name='id' onChange={this.updateEditObject}>
                                <option id="1">- Select Blog -</option>
                                {
                                Object.keys(this.state.current_blogs_response).map((item, i) => (
                                    <option value={this.state.current_blogs_response[item]._id}>{this.state.current_blogs_response[item].title}</option>
                                ))
                                }
                            </select>
                            <input type="submit" value="Find Blog" onClick={this.findObject}/>
                        </div>
                        <input id='blog_title' name='title' type='text' placeholder='- Blog Title -' onChange={this.updateEditObjectInputs} defaultValue={this.state.edit_blog.title}/>
                        <input id='blog_snippet' name='snippet' type='text' placeholder='- Blog Snippet -' onChange={this.updateEditObjectInputs} defaultValue={this.state.edit_blog.snippet}/>
                        <textarea id='blog_body' name='body' placeholder='- Blog Body -' onChange={this.updateEditObjectInputs} defaultValue={this.state.edit_blog.body}></textarea>
                        <input type="submit" value="Update" onClick={this.updatObject}/>
                        <input type="submit" value="Delete" onClick={this.deleteObject}/>
                    </form>
                </div>
            ]
        }
        else{
            create_blog_entry = []
        }

        return(
            <div className="main-page-container blog">
                <div className="header blog">
                    <div className='email-icon'>
                        <FaBookOpen/>
                    </div>
                </div>
                <div className="entries-container blog">
                    {
                        // Object.keys is like a for loop though a array (in this case containing a obj)
                        // Where item is the postion in the array (0,1,2 or 3)
                        Object.keys(this.state.current_blogs_response).map((item, i) => (
                            <CollapseContainer 
                                text={this.state.current_blogs_response[item].title + " - " + this.state.current_blogs_response[item].snippet}
                                init_collapse={true} 
                                container_style={{margin:"15px 0", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
                                header_style={{background:"var(--accent)",margin: "auto",border: "",fontWeight:"bold",borderBottom:"4px solid var(--primary)",textTransform: "uppercase"}} 
                                body_style={{width:"98%", margin:"auto", border:"none", padding: "20px 0"}}
                                body={
                                        <div className="main-blog-container">
                                            <div className='blog-body-container'>{this.state.current_blogs_response[item].body}
                                            <div className='timestamp' >{Moment(this.state.current_blogs_response[item].createdAt).format('DD/MM/YYYY hh:mm')}</div>
                                            </div>
                                        </div>
                                    }
                            />
                        ))
                    }
                </div>
                {create_blog_entry}
                {edit_blog_entry}
            </div>
        )
    }
}
// -------------------------------------------------------------------------------------------------------

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
            <div className="collapse-container" style={this.props.container_style}>
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