import React, { Fragment } from 'react';
import { handleInitialData } from './actions/getdata'
import { connect } from 'react-redux'
import Login from './components/login'
import NavBar from './components/navbar'
import QuestionBoard from './components/questionboard'
import AddQuestion from './components/newquestion'
import QuestionDetail from './components/questiondetail'
import NotFound from './components/notfound'


import Leaderboard from './components/leaderboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuthUser} from './actions/authuser';

import {HashRouter, Route, Switch, Redirect } from 'react-router-dom'

class App extends React.Component {

	componentDidMount() {
	  this.props.getAuth(getAuthUser())
	  this.props.getData(handleInitialData())
	}
  
	guestRoutes = () => (
	  <Switch>
		<Route exact path='/' component={Login} />
		<Redirect from='*' to='/' />
	  </Switch>
	)
  
	authedRoutes = () => (
		<Switch>
		
		<Route path="/" exact component={QuestionBoard} />
		<Route path="/login" exact component={Login}/>
		<Route path='/dashboard' exact component={QuestionBoard} />
		<Route path='/add' exact component={AddQuestion} />
		<Route path='/question/:id' component={QuestionDetail} />
		<Route path='/leaderboard' component={Leaderboard} />
		<Route path='/notfound' component={NotFound} />
		<Redirect from='*' to='/notfound' />
	</Switch>


	)
  

  
	render() {
		
	  return (
		<HashRouter>
		  <Fragment>
		
			<div className="App">
			  <NavBar />
			  {this.props.displayLogin
              ? this.guestRoutes()
              : this.authedRoutes()}
			</div>
		  </Fragment>
		</HashRouter>)
	}
  }
  
  function mapStateToProps ({ authedUser, questions }) {
	return {
	
	  displayLogin: authedUser === null
	}
  }
  
  function mapDispatchToProps(dispatch) {
	return {
	  getData: () => dispatch(handleInitialData()),
	  getAuth: () => dispatch(getAuthUser())
	}
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(App)
