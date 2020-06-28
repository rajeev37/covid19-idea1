import React from "react";
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

const SignUp = inject("stores")(observer(class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            email: "",
            password: ""
        }
    }
    changeHandler = e => {
        console.log("####", e.target);
        this.setState({ [e.target.name]: e.target.value });
    }
    submitSignUp = (e) => {
        e.preventDefault();
        console.log("$$$$$$$$$$$", this.state);
    }
    render() {
        const { fName, lName, email, password } = this.state;
        return (
            <Form onSubmit={this.submitSignUp}>
                <h3>Sign Up</h3>
                <Form.Group controlId="formBasicFName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        type="text"
                        name="fName"
                        value={fName}
                        onChange={this.changeHandler}
                        placeholder="First name"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicLName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control 
                        type="text"
                        name="lName"
                        value={lName}
                        onChange={this.changeHandler}
                        placeholder="Last name"
                    />
                </Form.Group>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/sign-in">sign in?</Link>
                </p>
            </Form>
        );
    }
}));
export default SignUp;