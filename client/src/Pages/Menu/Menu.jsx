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
                <NewSeasonStart {...this.props}/>
                <button onClick={this.handleCloseModal}>close modal</button>
                </ReactModal>
                <h1>menu</h1>
                <p>Hello, {this.props.user.nickname}</p>
                <h1>start a new season</h1>
                <button onClick={this.handleOpenModal}>Create a New Season</button>
                <h1>your saved seasons</h1>
            </div>
        )
    }
}