import React, { Component } from 'react';
import ReactModal from 'react-modal';
import AddAccount from '../../Components/AddAccount/AddAccount';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionCreators from '../../actions/modalActions';
import * as accountsSavedFormActionCreators from '../../actions/accountsSavedActions';

class Menu extends Component {

    componentWillMount() {
        ReactModal.setAppElement('body');
        console.log(this.props)
    }
    componentDidUpdate(){
        console.log(this.props)
    }

    render() {
        return (
            <div className="container">
                <ReactModal
                    isOpen={this.props.showModal}
                >
                    <button onClick={() => this.props.modalActions.closeModal()}>close modal</button>
                </ReactModal>
                <div>
                    <h1>thanks for logging in, {this.props.profile.nickname}</h1>
                    <button onClick={() => this.props.accountsSavedFormActions.signupStep()}>steptest</button>
                    <div className="battlenet-account-form">
                        <button onClick={() => this.props.modalActions.openModal()}>Open</button>
                        <AddAccount {...this.props} />
                    </div>
                </div>
            </div>
        )
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
function mapStateToProps(state) {
    return {
        showModal: state.showModal,
        accountsSavedForm: state.accountsSavedForm,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        modalActions: bindActionCreators(modalActionCreators, dispatch),
        accountsSavedFormActions: bindActionCreators(accountsSavedFormActionCreators, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)