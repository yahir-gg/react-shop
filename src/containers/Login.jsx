import React from 'react';

const Login = () => {
    return(
        <div classname="login">
           <div classname="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" classname="logo"/>

                <h1 classname="title">Create a new password</h1>
                <p classname="subtitle">Enter a new passwrd for yue account</p>

                <form action="/" classname="form">
                    <label for="password" classname="label">Password</label>
                    <input type="password" id="password" placeholder="*********" classname="input input-password"/>

                    <label for="new-password" classname="label">Password</label>
                    <input type="password" id="new-password" placeholder="*********" classname="input input-password"/>

                    <input type="submit" value="Confirm" classname="primary-button login-button"/>
                </form>
            </div>
        </div>
    );
}

export default Login;