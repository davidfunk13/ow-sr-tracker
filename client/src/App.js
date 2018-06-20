import React, { Component } from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import Menu from "./Pages/Menu/Menu";
import NotFound from "./Components/NotFound/NotFound";
import Callback from './Components/Callback/Callback';
import Header from './Components/Header/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as userActionCreators from './actions/userActions';
import { Route, Router } from 'react-router-dom';

class App extends Component {
  componentDidMount(){
    // console.log(this.props.auth)
  }
  componentDidUpdate(){
    console.log(this.props.auth.getProfile());
  }
  render() {
    return (
      <div>
        {/* <Main auth={this.props.auth}/> */}
        {/* {mainComponent} */}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     user: state.user,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     userActions: bindActionCreators(userActionCreators, dispatch),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
