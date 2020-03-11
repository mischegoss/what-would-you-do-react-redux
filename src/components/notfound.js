import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
class NotFound extends Component {
  render() {
    return (
        <Alert variant="success">
        <Alert.Heading>OH NO! 404 / Not Found </Alert.Heading>
        <p>
         Looks like something went wrong 
        </p>
       
      </Alert>
    );
  }
}

export default NotFound