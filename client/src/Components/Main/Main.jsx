import React, { Component } from "react";

export default class Main extends Component {
  render() {
    console.log(this.props.auth.getProfile())
    return (
      <div className="container">
          <div className='container--logged-out'>
          <h1 className="heading u-margin-bottom-small">welcome to buttkegels' overwatch sr tracker</h1>
            <p>Hello there {this.props.user.nickname}! Sign in single click or email via Auth0 so we can save your results, and make the app usable by more than one person. I intend for more than one person to use this, so just to launch it and so the app knows your spreadsheet from someone elses I'll tie each user to their own UID. Feel free to come back, log in, and get your spreadsheet for the season back anytime.</p>
          </div>
          <a href="/menu">Go to the app menu!</a>
          <button onClick={() =>this.props.auth.getProfile()}>asdgkljsdngk</button>
      </div>
    );
  }
}
