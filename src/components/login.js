import React, { Component } from 'react';
import fire from '../fire';
import { Link } from "react-router-dom";
import ShowProfile from './showprofile';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorLogin: '',
            successLogin: false
        }
        this.login = this.login.bind(this);
    }

    login = (event) => {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;

        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .then((result) => {
                var user = fire.auth().currentUser;
                if (user != null) {
                    this.setState({ successLogin: true })
                    user.providerData.forEach(function (profile) {
                        this.setState({ email: profile.email })
                        console.log("  Provider-specific UID: " + profile.uid);
                        console.log("  Email: " + profile.email);
                    });
                }
            })
            .catch((error) => {
                this.setState({ errorLogin: 'Email หรือ Password ไม่ถูกต้อง' })
            });
    }

    inputHandle = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value, errorLogin: '' })
    }

    render() {
        if (this.state.successLogin === true) {
            return (
                <div className="container">
                    <ShowProfile email={this.state.email} />
                </div>
            )
        }
        return (
            <div className="container">
                <div className="col-md-5" style={{ "margin": "auto" }}>
                    <form onSubmit={this.login}>
                        <h2 className="form-group">Login</h2>
                        <h5 className="form-group text-danger" id="errorLogin">{this.state.errorLogin}</h5>
                        <div className="form-group">
                            <input type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(event) => { this.inputHandle(event) }} />
                        </div>
                        <div className="form-group">
                            <input type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Password"
                                onChange={(event) => { this.setState({ password: event.target.value }) }} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <hr />
                        <div className="form-group">
                            <span>Not have user? Register <Link to="/register"> here </Link></span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}