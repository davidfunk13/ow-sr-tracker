import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionCreators from '../../../actions/modalActions';
import * as accountsSavedFormActionCreators from '../../../actions/accountsSavedActions';
class BattleTag extends Component {
    state = {
        BattleTag: "",
        Errors: "",
    };

    validate = (BattleTag) => {
        console.log(BattleTag)
        
      
        console.log(this.state.Errors)
    }

    handleInputChange = event => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        });
        console.log(`BattleTag input: ${this.state.BattleTag}`)
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let BattleTag = this.state.BattleTag;
        if (BattleTag === "") {
            console.log('empty')
            this.setState({ Errors: 'Battletag Cannot be Empty Field!'})
            return this.state.Errors
        }
        if (BattleTag !== "") {
            this.setState({Errors: []})
            console.log(BattleTag)
            this.props.accountsSavedFormActions.saveBattleTag(BattleTag)
            this.props.accountsSavedFormActions.signupStep()            
        }
    }


    render() {

        return (
            <div className='account-form'>
                <h1 className='u-margin-bottom-small'>please tell us your battletag.</h1>
                <p>No account numbers are required, this is simply to put at the top of your spreadsheet in case you want to track another account.</p>
                <form className="account-form__form">
                {this.state.Errors ? <div><p>{this.state.Errors}</p></div> : <div><p>no errors to show</p></div> } 
                    <input
                    
                        className='account-form__form--BattleTag'
                        value={this.state.BattleTag}
                        name="BattleTag"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Battletag"
                    />
                    <button className='btn btn--submit-form' onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(BattleTag)