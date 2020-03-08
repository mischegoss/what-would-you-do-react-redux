import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthUser} from '../actions/authUser';

class Login extends Component {
	state = {
		userId: null,
		authenticated: false,
	}
	
	handleSelectionChanged = function(event) {
		const userId = event.target.value;
	
		this.setState(function(previousState) {
		  return {
			...previousState,
			userId,
		  };
		});
	}
	
	handleLogin = function(event) {
		const { userId } = this.state;
		const { dispatch } = this.props;
	
		dispatch(setAuthUser(userId));
	
		this.setState(function(previousState) {
		  return {
			...previousState,
			authenticated: true,
		  };
		});
	}
	

    render() {
		const { userId, authenticated } = this.state;
		const { users } = this.props;
		//const { from } = this.props.location.state || { from: { pathname: '/dashboard'}}
		const selected = userId ? userId : -1

		//if authenticated
		if(authenticated) {
      return (
        <div>AUTHENTICATED</div>
      )
      
		}
        
        return (
		    <div className='tile-item login'>
		        <div className="tile-header"><div>Welcome To Would You Rather App</div></div>
		        <div className='user-select'>
					<div>Please sign in to continue</div>
					<select id="login-select" value={selected} onChange={(event) => this.handleSelectionChanged(event)}>
						<option value="-1" disabled>Select user...</option>
						{Object.keys(users).map(function(key) {
							return (
								<option value={users[key].id} key={key}>
									{users[key].name}
								</option>
							);
						})}
					</select>
				</div>

				<button
					className='btn'
					disabled={userId === null}
					onClick={(event) => this.handleLogin(event)}>
					Login
				</button>
			
          </div>
		);  
    }
}

function mapStateToProps ({users}) {  
    return {
      users,
    };
  }

export default connect(mapStateToProps)(Login);

