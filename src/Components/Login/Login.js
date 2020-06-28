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
            <Form onSubmit={this.submitLogin}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.changeHandler}
                        placeholder="Enter email"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.changeHandler}
                        placeholder="Password"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        name="rememberMe"
                        value={rememberMe}
                        onChange={this.changeHandler}
                        label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}
export default Login;