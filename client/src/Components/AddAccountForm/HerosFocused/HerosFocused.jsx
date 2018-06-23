import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionCreators from '../../../actions/modalActions';
import * as accountsSavedFormActionCreators from '../../../actions/accountsSavedActions';   
class HerosFocused extends Component {
    state = {
       HerosFocused: []
      };
    
      handleInputChange = event => {
          let value = event.target.value;
          let name = event.target.name;
          this.setState({
              [name]: value
          });
          console.log(`BattleTag input: ${this.state.HerosFocused}`)
      };

      handleFormSubmit = event => {
          event.preventDefault();
          let HerosFocused = this.state.HerosFocused;
          this.props.accountsSavedFormActions.saveHerosFocused(HerosFocused)
          this.props.accountsSavedFormActions.signupStep()
          console.log(this.state.HerosFocused)
      }


    render() {
        return (
            <div className='account-form'>

                    <h1 className='u-margin-bottom-small'>Hello {this.props.profile.nickname}</h1>
                <form className="account-form__form">
                    <input
                        className='account-form__form--starting-sr'
                        value={this.state.HerosFocused}
                        name="HerosFocused"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="HerosFocused"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(HerosFocused)