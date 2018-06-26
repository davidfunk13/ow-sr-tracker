import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionCreators from '../../../actions/modalActions';
import * as accountsSavedFormActionCreators from '../../../actions/accountsSavedActions';
class BattleTag extends Component {
    state = {
        BattleTag: "",
        Errors: [],
    };

    validate = (BattleTag) => {

        // if (BattleTag.length === 0 && !this.state.Errors.includes('Battletag Cannot be Empty Field')) {
        //     console.log('doesnt include')
        //     this.setState({ Errors: this.state.Errors.concat('Battletag Cannot be Empty Field') });
            
        //     return this.state.Errors;
          
        // }
        // console.log(this.state.Errors)
        // if(BattleTag.length === 0 && this.state.Errors.includes('Battletag Cannot be Empty Field')) {
        //     console.log('includes!')
        //     return this.state.Errors;
        // }
        // if (!BattleTag.length === 0) {
            this.setState({Errors: []})
            this.props.accountsSavedFormActions.saveBattleTag(BattleTag)
            this.props.accountsSavedFormActions.signupStep()            
        // }
        // console.log(this.state.Errors)
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
        this.validate(BattleTag)
    }


    render() {

        return (
            <div className='account-form'>
                <h1 className='u-margin-bottom-small'>please tell us your battletag.</h1>
                <p>No account numbers are required, this is simply to put at the top of your spreadsheet in case you want to track another account.</p>
                <form className="account-form__form">
                {this.state.Errors.length ? <div>{this.state.Errors.map(error => {
                    <p>{error.error}</p>
                })}</div>:<div></div>  }
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