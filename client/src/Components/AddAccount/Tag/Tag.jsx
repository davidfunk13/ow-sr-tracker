import React, { Component } from 'react';

export default class Tag extends Component {
    render() {
        return (
            <div>
                <p>
                    Hello {this.props.user.nickname}
                </p>
                <form className="form">
                    <input
                        value={this.props.battleTag}
                        name="tag"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Battletag"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}