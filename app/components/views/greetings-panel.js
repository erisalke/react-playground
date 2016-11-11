import React from 'react';
import { connect } from 'react-redux';
import Button from '../basic/button';
import store from '../../store';
import { createRoom } from '../../api/room-api';
import { emitEvent } from '../../api/websockets';
import { setUser } from '../../actions/user-actions';
import { setUserInternal } from '../../actions/session-actions';
import crypto from 'crypto';
import InputWithButton from '../basic/InputWithButton';
import { handleLogin } from '../../actions/user-actions';



const GreetingsPanel = React.createClass({
  render: function() {
    return (
      <div>
        <InputWithButton
					buttonName="Login"
					onClick={ this.props.handleLogin }
					/>

      </div>
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
}

export default connect(undefined, mapDispatchToProps)(GreetingsPanel);
