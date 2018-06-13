import React, { Component } from "react";

export default class NewSeasonStart extends Component {
  render() {
    return (
      <div className="container">
        <h1>start tracking a new season</h1>
        <p>
          {this.props.user.nickname}, We need some information before we can start tracking your progress!
        </p>
      </div>
    );
  }
}
