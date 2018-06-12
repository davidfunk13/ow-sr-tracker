import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        {this.props.auth.isAuthenticated() ?
          <div className='container--logged-in'>
            <p className='content__heading'>'GO TO THE SUPER SECRET AREA '</p><a href='/secret'>Click Here</a>
          </div>
          :
          <div className='container--logged-out'>
          <h1 className="heading">welcome to buttkegels' overwatch sr tracker.</h1>
            <p>Sign in single click or email via Auth0 so we can save your results, and make the app usable by more than one person. I intend for more than one person to use this, so just to launch it and so the app knows your spreadsheet from someone elses I'll tie each user to their own UID. Feel free to come back, log in, and get your spreadsheet for the season back anytime.</p>
          </div>
        }
      </div>
    );
  }
}
