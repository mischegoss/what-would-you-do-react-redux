import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { removeAuthUser } from '../actions/authuser'

class Logout extends Component {
  componentWillMount () {
    this.props.dispatch(removeAuthUser())
  }
  render () {
    return <Redirect to='/' />
  }
}

export default connect()(Logout)