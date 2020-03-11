import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import {Link, NavLink} from 'react-router-dom';



class NavBar extends React.Component {
    render() {
        const {authedUser} = this.props
        
        
    
    return (
     
 
        <Navbar>
  <Navbar.Brand >Would You Rather?</Navbar.Brand>
  
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <div>
    {authedUser != null ? (
      <div>
        <NavLink to='/dashboard' exact activeClassName='active'>
        Home      |
    </NavLink>
    <NavLink to='/leaderboard' exact activeClassName='active'>
        Leaderboard      |
    </NavLink>
    <NavLink to='/add' exact activeClassName='active'>
        Add Question     |
    </NavLink>
        <Navbar.Text>
        {`Welcome ${authedUser}`}
        </Navbar.Text>

        <NavLink tag={Link} to='/logout'>Logout</NavLink>
            
       
        </div>
        ) : (
            <Navbar.Text>
           
          </Navbar.Text>
        )    
  
        }
        </div>
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


  