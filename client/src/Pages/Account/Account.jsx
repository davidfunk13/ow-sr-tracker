import React, { Component } from "react";
import ReactModal from "react-modal";
// import BattleTag from "../../Components/AddAccountForm/BattleTag/BattleTag";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalActionCreators from "../../actions/modalActions";
import * as accountsSavedFormActionCreators from "../../actions/accountsSavedActions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "60%",
    border: "1px solid black"
  }
};

class Account extends Component {
  componentDidMount() {
    this.props.accountsSavedFormActions.getAccounts(this.props.profile.sub);
  }

  componentWillMount() {
    ReactModal.setAppElement("body");
    console.log(this.props);
  }
  componentDidUpdate() {
    console.log(this.props);
  }

  render() {

    return (
      <div className="container">
        <ReactModal isOpen={this.props.showModal} style={customStyles}>
          <button
            className="btn btn--close-modal"
            onClick={() => this.props.modalActions.closeModal()}
          >
            close modal
          </button>
        </ReactModal>
        <div className='container'>
        <h1>Account Page</h1>
        <p>set up the routes you dingus</p>
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.showModal,
    accountsSavedForm: state.accountsSavedForm
  };
}

function mapDispatchToProps(dispatch) {
  return {
    modalActions: bindActionCreators(modalActionCreators, dispatch),
    accountsSavedFormActions: bindActionCreators(
      accountsSavedFormActionCreators,
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
