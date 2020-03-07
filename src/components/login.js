import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { Redirect, withRouter } from 'react-router-dom'
import { setAuthUser } from '../actions/authuser';

class Login extends Component {

    render() {
      
        const {users} = this.props;
        return (

            <div>This is where the Login Will Go</div>
          )

}
}

function mapStateToProps ({users}) {  
    return {
      users
    };
  }

export default connect(mapStateToProps)(Login);