import React, { Component } from 'react';
import ReactModal from 'react-modal';
import AddAccount from '../../Components/AddAccount/AddAccount';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionCreators from '../../actions/modalActions';

class Menu extends Component {

    componentWillMount() {
        ReactModal.setAppElement('body');
        console.log(this.props)
    }
    componentDidUpdate(){
        console.log(this.props)
    }

    // constructor() {
    // super();
    // // this.state = {
    // //     ...props,
    // //     showModal: false
    // // };
    // this.handleOpenModal = this.handleOpenModal.bind(this);
    // this.handleCloseModal = this.handleCloseModal.bind(this);
    // // console.log(this.state)
    // }

    // handleOpenModal() {
    // this.props.modal.openModal
    // }

    // handleCloseModal() {
    //     this.props.modal.closeModal;
    // }

    render() {
        return (
            <div className="container">
                <ReactModal
                    isOpen={this.props.showModal}
                >
                    <button onClick={() => this.props.modal.closeModal()}>close modal</button>
                </ReactModal>
                {/* {!this.state.owSrTrackInfo.infoSaved ? */}
                <div>
                    <h1>thanks for loggin in, {this.props.profile.nickname}</h1>
                    <p>It doesn't look like you have any stats with us, lets get you set up!</p>
                    <div className="battlenet-account-form">
                        <button onClick={() => this.props.modal.openModal()}>Open</button>
                        <AddAccount {...this.props} />
                    </div>
                </div>
                :
                    <div>
                    We have a record of you. Start recording a new season anyway?
                    </div>
                {/* } */}
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
        showModal: state.showModal
    }
}

function mapDispatchToProps(dispatch) {
    return {
        modal: bindActionCreators(modalActionCreators, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)