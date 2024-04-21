import React from 'react'

// Link to css file
import './login.css';

function validate_login_form(){
    console.log("do something")
}


function Login(){
    return(
        <div className='login-container-page'>
            <div className='login-container'>
                <div className='login-header-container'>
                    SIGN IN
                </div>
                <div className='login-form-container'>
                    <form>
                        <input type="text" id="username" name="username" placeholder="Username"></input>
                        <input type="password" id="password" name="password" placeholder="Password"></input>
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
                </div>
            </div>
        </div>
    )
}

export default Login;