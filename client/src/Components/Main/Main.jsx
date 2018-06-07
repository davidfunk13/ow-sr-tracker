import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <p className="App-intro">
          Hello {this.props.name}. GO TO THE SUPER SECRET AREA <a href='/secret'>Click Here</a>.
        </p>

        <div className="text">Please login</div>
        <button onClick={this.props.auth.login}>Login</button>
      </div>
    );
  }
}
