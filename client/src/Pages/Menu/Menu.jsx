import React, { Component } from 'react';
import ReactModal from 'react-modal';
import NewSeasonStart from '../NewSeasonStart/NewSeasonStart'

export default class Menu extends Component {

    componentWillMount() {
        ReactModal.setAppElement('body');
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
                    <NewSeasonStart {...this.props} />
                    <button onClick={this.handleCloseModal}>close modal</button>
                </ReactModal>
                <h1>menu</h1>
                {!this.state.owSrTrackInfo.infoSaved ?
                    <div>
                        <h1>start tracking a new season</h1>
                        <p>{this.props.user.nickname}, We need some information before we can start tracking your progress!</p>
                        <p>Click Start to answer a few questions.</p>
                    </div>
                    :
                    <div>
                        We have a record of you. Start recording a new season anyway?
                    </div>}
            </div>
        )
    }
}