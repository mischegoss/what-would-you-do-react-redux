
import { handleInitialData } from './actions/getdata'
import { connect } from 'react-redux'
import Login from './components/login'
import NavBar from './components/navbar'
import QuestionBoard from './components/questionboard'
import QuestionDetail from './components/questiondetail'
import NotFound from './components/notfound'
import Leaderboard from './components/leaderboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
              <Route path="/login" exact component={Login}/>
              
              <Route path="/dashboard" exact component={QuestionBoard}/>
              <Route path='/question/:id' component={QuestionDetail} />
              <Route path='/leaderboard' component={Leaderboard} />
              
              <Route path="/notfound" component={NotFound} />
            </Switch>
          </div>
      </div>
    </Fragment>
  </Router>
  )
}
}
export default connect()(App);
