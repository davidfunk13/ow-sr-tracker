import React, { Component } from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import Secret from "./Components/Secret/Secret";
import NotFound from "./Components/NotFound/NotFound";
import Callback from './Components/Callback/Callback';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    let mainComponent = "";
    switch (this.props.location) {
      case "":
        mainComponent = <Main {...this.props} />;
        break;
      case "callback":
        mainComponent = <Callback />
        break;
      case "secret":
        mainComponent = this.props.auth.isAuthenticated() ? < Secret {...this.props} /> : <NotFound />;
        break;
      default:
        mainComponent = <NotFound />;
    }

    return (
      <div className="app">
        <Header {...this.props} />
        {mainComponent}
      </div>
    );
  }
}

export default App;
