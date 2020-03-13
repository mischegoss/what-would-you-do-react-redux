import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeAuthUser } from '../actions/authuser'

class Logout extends Component {
  componentWillMount () {
    this.props.dispatch(removeAuthUser())
  }
  render () {
   <Button
}
export default connect()(Logout)