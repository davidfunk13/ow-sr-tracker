import React, { Component } from "react";
import ReactModal from "react-modal";
import BattleTag from "../../Components/AddAccountForm/BattleTag/BattleTag";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalActionCreators from "../../actions/modalActions";
import * as accountsSavedFormActionCreators from "../../actions/accountsSavedActions";
import StartingSR from "../../Components/AddAccountForm/StartingSR/StartingSR";
import HerosFocused from "../../Components/AddAccountForm/HerosFocused/HerosFocused";
import Confirm from "../../Components/AddAccountForm/Confirm/Confirm";

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
    console.log(this.props);
  }
  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    let accountsSavedForm;
    switch (this.props.accountsSavedForm.step) {
      case 1:
        accountsSavedForm = <BattleTag {...this.props} />;
        break;
      case 2:
        accountsSavedForm = <StartingSR {...this.props} />;
        break;
      case 3:
        accountsSavedForm = <HerosFocused {...this.props} />;
        break;
      case 4:
        accountsSavedForm = <Confirm {...this.props} />;
        break;
      default:
        break;
    }

    return (
      <div className="container">
        <ReactModal isOpen={this.props.showModal} style={customStyles}>
          {accountsSavedForm}
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
            {!Array.isArray(this.props.accountsSavedForm.seasons) ||
            !this.props.accountsSavedForm.seasons.length ? (
              <div className="seasons__no">
                <p>We have no accounts saved for you.</p>
                <p>Please see above to start tracking a new one!</p>
              </div>
            ) : (
              <div className="seasons__yes">
                <h2>You have a season saved with us! Your seasons:</h2>
                {console.log()}
                {this.props.accountsSavedForm.seasons.map(seasons => {
                  return (
                    <div
                      className="season__yes--saved-account u-margin-top-small"
                      key={seasons._id}
                    >
                      <div>Your uid: {seasons.uid}</div>
                      <div>
                        <h2>BattleTag:</h2>
                        <p>{seasons.BattleTag}</p>
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
)(Menu);
