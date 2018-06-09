import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">

        {this.props.auth.isAuthenticated() ?
          <div>
            <p>'GO TO THE SUPER SECRET AREA '</p><a href='/secret'>Click Here</a>
          </div>
          :
          <div>
            <p>' Please Login or register'</p>
          </div>
        }
      </div>
    );
  }
}
