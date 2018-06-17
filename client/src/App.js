import React, { Component } from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import Menu from "./Pages/Menu/Menu";
import NotFound from "./Components/NotFound/NotFound";
import Callback from './Components/Callback/Callback';
import Header from './Components/Header/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from './actions/userActions';

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
        mainComponent =  < Menu {...this.props} />
        break;
      default:
        mainComponent = <NotFound />;
    }
    console.log(this.props)
    return (
      <div className="app">

        <Header {...this.props} />
        {mainComponent}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
