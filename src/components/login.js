import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthUser} from '../actions/authuser';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Login extends Component {

  
	state = {
		userId: null,
		authenticated: false,
	}
	
  handleSelectionChanged = function(event) {
    const userId = event.target.value;
    console.log(userId)
	
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
	  console.log(userId)
		this.setState(function(previousState) {
		  return {
			...previousState,
			authenticate: true,
		  };
		});
	}
	

    render() {
		const { userId, authenticated } = this.state;
    const { users } = this.props;
    
		//const { from } = this.props.location.state || { from: { pathname: '/dashboard'}}
		//const selected = userId ? userId : -1

		//if authenticated
		if(authenticated) {

      return (
        <div>AUTHENTICATED</div>
      )
      
		}
        
        return (
<Card>
  <Card.Body>

  <h2>Pick Your House to Play</h2>
				   <ul>
						{Object.keys(users).map((key)=> {
							return (
                <li>
                <Button 
                
                onClick={(event) => this.handleSelectionChanged(event)}
                value={users[key].id} 
                className={users[key].id}
                key={key}
                
               >
									{users[key].name}
                 
								</Button>
                </li>
							)
						})}
				</ul>

        <div>
    {this.state.userId != null ? (
        
<Button
 onClick={(event) => this.handleLogin(event)}>
   {`You picked ${this.state.userId}. Click here to play`}

 </Button>


        ) : (
            <div>
          Pick your House above!
          </div>
        )    
  
        }
        </div>









  </Card.Body>
</Card>

  
				
		);  
    
          }}

function mapStateToProps ({users}) {  
    return {
      users
    };
  }
  export default /*withRouter*/(connect(mapStateToProps)(Login));

