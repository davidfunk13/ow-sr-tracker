import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionCreators from '../../../actions/modalActions';
import * as accountsSavedFormActionCreators from '../../../actions/accountsSavedActions';   
class BattleTag extends Component {
    state = {
        BattleTag: "",
      };
    
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
          this.props.accountsSavedFormActions.saveBattleTag(BattleTag)
          this.props.accountsSavedFormActions.signupStep()
          console.log(this.state.BattleTag)
      }


    render() {
        return (
            <div className='account-form'>
                    <h1 className='u-margin-bottom-small'>Hello {this.props.profile.nickname}, Please tell us your BattleTag.</h1>
                <p>No account numbers are required, this is simply to put at the top of your spreadsheet in case you want to track another account.</p>
                <form className="account-form__form">
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