import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <p className="App-intro">
          Hello {this.props.name}. To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="text">ayo whats gud?</div>
      </div>
    );
  }
}
