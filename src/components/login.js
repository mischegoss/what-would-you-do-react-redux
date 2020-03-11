import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthUser} from '../actions/authuser';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


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
	
    const { users } = this.props;
    
	
        
        return (
<Card>
  <Card.Body>

  <h2>Pick Your House to Play</h2>
				   <ul>
						{Object.keys(users).map((key)=> {
							return (
                <li  key={key}>
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
 <Link to="/dashboard">       
<Button
 onClick={(event) => this.handleLogin(event)}>
   {`You picked ${this.state.userId}. Click here to play`}

 </Button>
 </Link>

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
  export default (connect(mapStateToProps)(Login));

