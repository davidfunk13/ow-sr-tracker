import React, { Component } from "react";
import ReactModal from "react-modal";
export default class NewSeason extends Component {
  componentWillMount() {
    ReactModal.setAppElement("body");
  }
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    console.log(this.state);
    console.log(this.props);
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
        <ReactModal isOpen={this.state.showModal}>
          <NewSeason {...this.props} />
          <button onClick={this.handleCloseModal}>close modal</button>
        </ReactModal>
        <button onClick={this.handleOpenModal}>open modal</button>
        <h1>start tracking a new season</h1>
        <p>
          {this.props.user.nickname}, click the button to start! Follow the
          instructions and you're good to go!
        </p>

        <a href="/">Go Home</a>
      </div>
    );
  }
}
