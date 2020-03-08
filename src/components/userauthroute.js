import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={function(props) {
      return (
        rest.authedUser
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
      )}
    } />
  );
}

function mapStateToProps( { authedUser }) {
    return {
        authedUser
    }
}