import React, { Component } from 'react';

export default class ShowProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
        console.log('state', this.state)
    }

    render() {
        return (
            <div id="showProfile">
                <h2>User Profile</h2>
                <h3>Email :{this.state.email} </h3>
            </div>
        )
    }
}