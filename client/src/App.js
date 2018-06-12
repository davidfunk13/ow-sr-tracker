import React, { Component } from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import Menu from "./Pages/Menu/Menu";
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
      case "menu":
        mainComponent = this.props.auth.isAuthenticated() ? < Menu {...this.props} /> : <NotFound />;
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
