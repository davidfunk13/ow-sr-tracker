import React, { Component } from 'react';

export default class NewSeason extends Component {
    render() {
        return (
            <div className="container">
                <h1>start tracking a new season</h1>
                <p>{this.props.user.nickname}, click the button to start! Follow the instructions and you're good to go!</p>

                <a href="/">Go Home</a>
            </div>
        )
    }
}