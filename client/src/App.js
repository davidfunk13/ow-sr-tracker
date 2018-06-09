import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main/Main";
import Secret from "./Components/Secret/Secret";
import NotFound from "./Components/NotFound/NotFound";
import Callback from './Components/Callback/Callback';
class App extends Component {
  render() {
    let mainComponent = "";
    switch (this.props.location) {
      case "":
        mainComponent = <Main {...this.props} />;
        break;
      case "callback": 
        mainComponent = <Callback/>
        break;
      case "secret":
        mainComponent = this.props.auth.isAuthenticated() ? < Secret {...this.props} /> : <NotFound/>;
        break;
      default:
        mainComponent = <NotFound />;
    }

    return (
      <div className="app">
        <header className="app-header">
          <h1>welcome to OW SR tracker, {this.props.name}</h1>
          <button className='btn btn-login' onClick={this.props.auth.login}>Login</button>
          <button className='btn btn-logout' onClick={this.props.auth.logout}>Logout</button>
        </header>
        {mainComponent}
      </div>
    );
  }
}

export default App;
