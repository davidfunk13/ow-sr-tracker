import React, { Component } from 'react';
import ReactModal from 'react-modal';
import BattleTag from '../../Components/AddAccountForm/BattleTag/BattleTag';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionCreators from '../../actions/modalActions';
import * as accountsSavedFormActionCreators from '../../actions/accountsSavedActions';
import StartingSR from '../../Components/AddAccountForm/StartingSR/StartingSR';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        height: '60%',
        border: '1px solid black',
    }
};

class Menu extends Component {

    componentWillMount() {
        ReactModal.setAppElement('body');
        console.log(this.props)
    }
    componentDidUpdate() {
        console.log(this.props)
    }

    render() {
        let accountsSavedForm
        switch (this.props.accountsSavedForm.step) {
            case 1:
                accountsSavedForm = <BattleTag {...this.props} />
                break;
            case 2:
                accountsSavedForm = <StartingSR {...this.props} />
                break;
            case 3:
                accountsSavedForm = <div>Step3</div>
                break;
            default:
                break;
        }
        return (
            <div className="container">
                <ReactModal
                    isOpen={this.props.showModal}
                    style={customStyles}
                >
                    {accountsSavedForm}
                    <button className='btn btn--close-modal' onClick={() => this.props.modalActions.closeModal()}>close modal</button>
                </ReactModal>
                <div>
                    <h1>thanks for logging in, {this.props.profile.nickname}</h1>

                    <div className="battlenet-account-form">
                        <button className='btn btn--open-modal' onClick={() => this.props.modalActions.openModal()}>Open</button>
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