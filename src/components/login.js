import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { Redirect, withRouter } from 'react-router-dom'
import { setAuthUser, removeAuthUser } from '../actions/authuser';

class Login extends Component {

    render() {
      
        
        return (
            <div>
              
                {Object.key.usersProp.map(replyId => (
                  <li key={replyId}>
                    <p>{replyId}</p>
                  </li>
                ))}
              
            </div>
          )

}
}

function mapStateToProps ({ users}) {
    const usersProp = Object.keys(users)
    return {
      users: usersProp
    }
  }

export default connect(mapStateToProps)(Login);