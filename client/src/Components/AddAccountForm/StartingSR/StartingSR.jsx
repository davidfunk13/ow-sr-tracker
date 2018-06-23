import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalActionCreators from '../../../actions/modalActions';
import * as accountsSavedFormActionCreators from '../../../actions/accountsSavedActions';   
class StartingSR extends Component {
    state = {
        StartingSR: "",
      };
    
      handleInputChange = event => {
          let value = event.target.value;
          let name = event.target.name;
          this.setState({
              [name]: value
          });
          console.log(`BattleTag input: ${this.state.StartingSR}`)
      };

      handleFormSubmit = event => {
          event.preventDefault();
          let StartingSR = this.state.StartingSR;
          this.props.accountsSavedFormActions.saveStartingSR(StartingSR)
          this.props.accountsSavedFormActions.signupStep()
          console.log(this.state.StartingSR)
      }


    render() {
        return (
            <div>
                <p>
                    Hello {this.props.profile.nickname}, 
                </p>
                <form className="form">
                    <input
                        value={this.state.StartingSR}
                        name="StartingSR"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="StartingSR"
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

export default connect(mapStateToProps, mapDispatchToProps)(StartingSR)