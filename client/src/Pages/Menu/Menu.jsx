import React, { Component } from 'react';
import ReactModal from 'react-modal';
import NewSeason from '../NewSeason/NewSeason'

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
                <NewSeason {...this.props}/>
                <button onClick={this.handleCloseModal}>close modal</button>
                </ReactModal>
                <button onClick={this.handleOpenModal}>open modal</button>
                <h1>menu</h1>
                <p>Hello, {this.props.user.nickname}</p>
                <h1>start a new season</h1>
                <a href="/newseason"><p>click here to start a new season</p></a>

                <h1>your saved seasons</h1>
            </div>
        )
    }
}