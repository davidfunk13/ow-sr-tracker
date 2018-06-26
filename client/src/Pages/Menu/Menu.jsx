import React, { Component } from "react";
import ReactModal from "react-modal";
import BattleTag from "../../Components/AddAccountForm/BattleTag/BattleTag";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalActionCreators from "../../actions/modalActions";
import * as accountsSavedFormActionCreators from "../../actions/accountsSavedActions";
// import StartingSR from "../../Components/AddAccountForm/StartingSR/StartingSR";
// import HerosFocused from "../../Components/AddAccountForm/HerosFocused/HerosFocused";
// import Confirm from "../../Components/AddAccountForm/Confirm/Confirm";

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

class Menu extends Component {
  componentDidMount() {
    this.props.accountsSavedFormActions.getAccounts(this.props.profile.sub);
  }

  componentWillMount() {
    ReactModal.setAppElement("body");
  }
componentWillUpdate(){
}
  render() {

    return (
      <div className="container">
        <ReactModal isOpen={this.props.showModal} style={customStyles}>
        <BattleTag {...this.props}/>
          <button
            className="btn btn--close-modal"
            onClick={() => this.props.modalActions.closeModal()}
          >
            close modal
          </button>
        </ReactModal>
        <div>
          <h1 className='u-margin-bottom-small'>Thanks for logging in, {this.props.profile.nickname}</h1>

          <h2 className='u-margin-bottom-small'>Start Tracking a New account</h2>
          <div className="battlenet-account-form">
            <button
              className="btn btn--open-modal"
              onClick={() => this.props.modalActions.openModal()}
            >
              Track New Account
            </button>
          </div>
          <div className="seasons u-margin-top-small">
            {!Array.isArray(this.props.accountsSavedForm.account) ||
              !this.props.accountsSavedForm.account.length ? (
                <div className="seasons__no">
                  <p>We have no accounts saved for you.</p>
                  <p>Please see above to start tracking a new one!</p>
                </div>
              ) : (
                <div className="seasons__yes">
                  <h2>You have a season saved with us! Your seasons:</h2>
                  {console.log()}
                  {this.props.accountsSavedForm.account.map(accounts => {
                    return (
                      <div
                        className="season__yes--saved-account u-margin-top-small"
                        key={accounts._id}
                      >
                        <div>Your uid: {accounts.uid}</div>
                        <div>
                          <h2>BattleTag:</h2>
                          <p>{accounts.BattleTag}</p>
                          <p>make this a seprate component for new modal</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.showModal,
    accountsSavedForm: state.accountsSavedForm,
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
)(Menu);
