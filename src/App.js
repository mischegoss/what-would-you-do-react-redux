import React, { Fragment } from 'react';
import { handleInitialData } from './actions/getdata'
import { connect } from 'react-redux'
import Login from './components/login'
import NavBar from './components/navbar'
import QuestionBoard from './components/questionboard'
import AddQuestion from './components/newquestion'
import QuestionDetail from './components/questiondetail'
import Notfound from './components/notfound'
import ProtectedRoute from './components/protectedroutes'
import Leaderboard from  './components/leaderboard'

import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component {

	componentDidMount() {
    	this.props.dispatch(handleInitialData())
	}
  
	  render() {
		  return (
			  <Router>
				  <Fragment>
					  <div className='container'>
						  <NavBar />
							  <div className="main-content"> 
								  <Switch>
									  <Route path="/" exact component={Login}/>
									  <ProtectedRoute path='/dashboard' exact component={QuestionBoard} />
									  <ProtectedRoute path='/add' exact component={AddQuestion} />
									  <ProtectedRoute path='/question/:id' component={QuestionDetail} />
									  <ProtectedRoute path='/leaderboard' component={Leaderboard} />
			
									  <ProtectedRoute path='/notfound' component={Notfound} /> 
									   <Route component={Notfound} />
								  </Switch>
							  </div>
					  </div>
				  </Fragment>
			  </Router>
		  )
	  }
  }
  
  export default connect()(App);
 