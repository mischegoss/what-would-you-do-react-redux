import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux'


class NavBar extends React.Component {
    render() {
        const {authedUser} = this.props
    
    return (
     
 
        <Navbar>
  <Navbar.Brand href="#home">Would You Rather?</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: {`Avatar of ${authedUser}`}
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
    )
  }
}
function mapStateToProps( { authedUser, users}, props) {
    return {
        authedUser,
        users,
        user: users[authedUser]
    }

}
export default connect(mapStateToProps)(NavBar)
  