import React, { Component } from "react";

export default class NewSeasonStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
    };
    console.log(this.state)
    console.log(this.props)
  }
  startQuiz = () => {
    console.log(this.state.owSrTrackInfo)
  }
  render() {

    return (
      <div className="container">
        {/* if infoSaved is false */}
      <p>hello</p>
      </div>
    );
  }
}
