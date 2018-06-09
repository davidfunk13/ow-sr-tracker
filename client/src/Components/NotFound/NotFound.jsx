import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div className="notfound-container">
        <p>401 You aren't authenticated. Please login to access this page.</p>
      </div>
    );
  }
}
