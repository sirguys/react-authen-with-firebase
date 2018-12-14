import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-light bg-light">
                <Link to="/">
                    <div className="navbar-brand">Firebase AUTH</div>
                </Link>
                <div className="col-md-4">
                    <Link to="/register">
                        <button className="btn btn-outline-success" >Register</button>
                    </Link>
                </div>
            </div>
        )
    }
}