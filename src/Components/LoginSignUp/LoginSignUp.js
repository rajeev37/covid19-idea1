import React from "react";

import Header from "../organisms/Header/Header.js";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp.js";

class LoginSignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            showLogin: true
        }
    }
    toggelForm = e => {
        this.setState({ showLogin: !this.state.showLogin });
    }
    submitLogin = (e) => {
        e.preventDefault();
        console.log("$$$$$$$$$$$", this.state);
    }
    render() {
        return (<div>
            <div className="container-shadow-login-sign-up"></div>
            <div className="container-login-sign-up">
                <div className="wrap login-signup">
                    <div className="headings">
                        <a id="sign-in" href="#" className={this.state.showLogin && 'active'} onClick={this.toggelForm}><span>Log In</span></a>
                        <a id="sign-up" href="#" className={!this.state.showLogin && 'active'} onClick={this.toggelForm}><span>Sign Up</span></a>
                    </div>
                    {this.state.showLogin && <Login />}
                    {!this.state.showLogin && <SignUp />}
                </div>
            </div>
        </div>)

    }
};

export default LoginSignUp