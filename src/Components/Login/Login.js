import React from "react";
import { Form, Button } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            rememberMe: ""
        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    submitLogin = (e) => {
        e.preventDefault();
        console.log("$$$$$$$$$$$", this.state);
    }
    render() {
        const { email, password, rememberMe } = this.state;
        return (
            <div id="sign-in-form">
                <form>
                    <label for="username">Username</label>
                    <input id="username" type="text" name="username" />
                    <label for="password">Password</label>
                    <input id="password" type="password" name="password" />
                    <input id="remember" type="checkbox" />
                    <label for="remember" id="rlabel">Keep me Signed in</label>
                    <input type="submit" class="button" name="submit" value="Sign in" />
                </form>

                <div className="footer">
                    <div class="hr"></div>
                    <div class="fp"><a href="">Forgot Password?</a></div>
                </div>
            </div>

        );
    }
}
export default Login;