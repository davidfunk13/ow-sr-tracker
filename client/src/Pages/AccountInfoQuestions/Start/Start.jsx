import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class Start extends Component {
  render() {
    return (
      <div className="container">
        <p>Start</p>
        <Link to='/ow-account-info/1'>Q1</Link>
      </div>
    );
  }
}
