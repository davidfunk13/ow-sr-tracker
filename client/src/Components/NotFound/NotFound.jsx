import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className='container--logged-out'>
          <h1 className="heading u-margin-bottom-small">Welcome to my SR Tracker!</h1>

          <h2 className='u-margin-bottom-small'>Features:</h2>
          <p className='u-margin-bottom-small'>I made this because every other SR tracker I tried was lacking. I made this to solve some of the problems I usually come across.</p>

          <h2 className='u-margin-bottom-small'>Other SR Trackers</h2>
          <div>
            <li>Matches are too fast to input information at the beginning. </li>
            <li>So you've got a spreadsheet, now what? How can I see what my data means?</li>
            <li>Can't track multiple accounts</li>
            <li>Can't track heros of focus and their data</li>
          </div>

          <h2 className='u-margin-bottom-small'>This Application</h2>
          <div>
            <li>We use popup menus in the order they occur in game. Click along as the match starts!</li>
            <li>We graph and chart your progress and seasons in beautiful visual formats.</li>
            <li>Log into the app, and save seperate accounts and seasons! Tied to your user id in our database, retreivable at any time.</li>
            <li>For each season, you can pick heros of focus. From here, we will make sure their data is featured in your GUI front and center.</li>
          </div>
          <p></p>
        </div>
      </div>
    );
  }
}
