import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthUser} from '../actions/authuser';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { NavLink, withRouter, Redirect, useParams } from 'react-router-dom'


class Login extends Component {
 
  
	state = {
		userId: null,
    redirectToReferrer: false,
    redirect: null,

    
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
    
   
    let {id} = this.props.match.params;
    const { userId } = this.state;
		const { dispatch } = this.props;
	
		dispatch(setAuthUser(userId));
	
		this.setState(function(previousState) {
		  return {
        ...previousState,
      redirectToReferrer: true,
      redirect: id,
		
		  };
    });
    
	}
   
   
  
  
  
  
    render() {

   
      const { users } = this.props;
      const {redirectToReferrer} = this.state;
      const { from } = this.props.id || { from: { pathname: '/QuestionBoard'}}
       
      if(redirectToReferrer) {
        return <Redirect to={from} />
      }
        
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
     
<NavLink to="/dashboard">
<Button
 onClick={(event) => this.handleLogin(event)}>
   {`You picked ${this.state.userId}. Click here to play`}

 </Button>
 </NavLink>

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
  export default withRouter(connect(mapStateToProps)(Login));


