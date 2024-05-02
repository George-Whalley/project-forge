import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
// Link to css file
import './login.css'
// Getch font awesomes from libaray
import { FaUser, FaKey } from 'react-icons/fa'
// Import Axios
import axios from 'axios'


//Main
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "", // Store Username
            password: "", // Store Password
            success_redirect: false // If login is successful redirect
        };
        this.handleSubmit = this.handleSubmit.bind(this); // ?
    }

    onChange = (event) => this.setState({ [event.target.id]: event.target.value }); // On change of the input value, update the sate

    handleSubmit(event){
        event.preventDefault(); // Prevent refresh
        // If the username and password have bee supplied
        if(this.state.username && this.state.password){
            // make post call to mongodb-user backend
            axios.post('http://localhost:9000/mongodb-user', {
                email: this.state.username, // Set the request email to the state username
                password: this.state.password  // Set the reqeust password to the state password
            })

            .then(
                // If a result is returned
                result => {
                    console.log(result) // Console log result output
                    localStorage.setItem('user', JSON.stringify(result.data)) // Store the result in local storage
                    this.setState( { success_redirect:true } ) // Update the redirect state (move to projects)
                }
            )
            // Else log error
            .catch(err => console.log(err))
        }
    }

    // Return statement
    render(){
        // Dev statement
        console.log(this.state.apiResponse);
        if (this.state.success_redirect) {
            // redirect to home if signed up
            return  <Navigate to='/Projects' />;
        }
        return(
            <div className='main-page-container login-page'>
                <div className='login-card'>
                    <div className='login-header-container'>
                    </div>
                    <div className="palceholder-picture-login">
                        <FaUser/>
                    </div>
                    <div className="login-form-container">
                    <form onSubmit={this.handleSubmit}>
                            <div className="username input-container">
                                <FaUser/>
                                <input type="text" id="username" name="username" placeholder="Username" value={this.state.value} onChange={this.onChange}></input>
                            </div>
                            <div className="password input-container">
                                <FaKey/>
                                <input type="password" id="password" name="password" placeholder="Password" value={this.state.value} onChange={this.onChange}></input>
                            </div>
                            <input type="submit" id="submit" name="submit" value="Login"></input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

// Export
export default Login;