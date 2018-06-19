import React, { Component } from 'react';
import Tag from './Tag/Tag';
export default class AddAccount extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         ...props,
    //     };
    // }
    state = {
        ...this.props,
        step: 1,
        battleTag: "",
        numbers: "",
        startingSR: "",
    }

    handleQuestions() {
        switch (this.state.step) {
            case 1:
                return <Tag {...this.state} />
            case 2:
            case 3:
            default:
                return <div>herro</div>
        }
    }

    render() {
        return (
            <div className="question-container">
                {/* <p>{this.state.user.nickname}</p> */}
                <p>Step: {this.state.step}</p>
                <div>
                    {this.handleQuestions()}
                </div>
            </div>
        )
    }
}