import React, { Component } from 'react'

// Link to css file
import './login.css';
// Getch font awesomes from libaray
import { FaUser, FaKey } from 'react-icons/fa';


//Main
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI() {
        fetch("http://localhost:9000/runescape_apis")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentWillMount() {
        this.callAPI();
    }

    // Return statement
    render(){
        return(
            <div className='login-container-page'>
                <div className='login-card'>
                    <div className='login-header-container'>
                    </div>
                    <div className="palceholder-picture-login">
                        <FaUser/>
                    </div>
                    <div className="login-form-container">
                    <form>
                            <div className="username input-container">
                                <FaUser/>
                                <input type="text" id="username" name="username" placeholder="Username"></input>
                            </div>
                            <div className="password input-container">
                                <FaKey/>
                                <input type="password" id="password" name="password" placeholder="Password"></input>
                            </div>
                            <input type="submit" id="submit" name="submit" value="Login"></input>
                            <div className="show-password-container checkbox-container">
                                <input type="checkbox" id="show_password" name="show_password"></input>
                                <label for="show_password">Show Password</label>
                            </div>
                            <div className="rememebr-me-container checkbox-container">
                                <input type="checkbox" id="remember_me" name="renenber_me"></input>
                                <label for="remember_me">Remember Me</label>
                            </div>
                        </form>
                        <p className="App-intro">;{this.state.apiResponse}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;