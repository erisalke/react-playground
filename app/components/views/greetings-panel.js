import React from 'react';
import { connect } from 'react-redux';
import InputWithButton from '../basic/InputWithButton';
import { handleLogin } from '../../actions/user-actions';


const GreetingsPanel = React.createClass({
  render: function() {
    return (
        <InputWithButton
					buttonName="Login"
					onClick={ this.props.handleLogin }
					/>
    	);
  }
});

function mapDispatchToProps(dispatch) {
  return {
		handleLogin :
			function (value) {
				dispatch(handleLogin( value ))
			}
	}
};

export default connect(undefined, mapDispatchToProps)(GreetingsPanel);
