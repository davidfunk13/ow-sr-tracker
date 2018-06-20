import React, { Component } from 'react';
import ReactModal from 'react-modal';
import AddAccount from '../../Components/AddAccount/AddAccount';

export default class Menu extends Component {

    componentWillMount() {
        ReactModal.setAppElement('body');
        console.log(this.props)
    }

    constructor(props) {
        super(props);
        this.state = {
            ...props,
            showModal: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        console.log(this.state)
        console.log(this.props)
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div className="container">
                <ReactModal
                    isOpen={this.state.showModal}
                >
                    <button onClick={this.handleCloseModal}>close modal</button>
                </ReactModal>
                {/* {!this.state.owSrTrackInfo.infoSaved ? */}
                    <div>
                        <h1>thanks for loggin in, {this.props.profile.nickname}</h1>
                        <p>It doesn't look like you have any stats with us, lets get you set up!</p>
                        <div className="battlenet-account-form">
                        <button onClick={this.handleOpenModal}>Open</button>
                        <AddAccount {...this.props}/>
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