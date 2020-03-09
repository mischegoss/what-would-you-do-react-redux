import React from 'react';
import { handleInitialData } from './actions/getdata'
import { connect } from 'react-redux'
import Login from './components/login'
import NavBar from './components/navbar'
import QuestionBoard from './components/questionboard'
import 'bootstrap/dist/css/bootstrap.min.css';
//import AuthRoute from './userauthroute'
//import { render } from '@testing-library/react';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
}
render() {
  return (
    <div className="App">
        <NavBar/>
        <Login/>
        <QuestionBoard/>
    </div>
  )
}
}
export default connect()(App);
