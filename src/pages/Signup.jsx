import React, { Component } from 'react'
import { userService } from '../services/userService'

export class Signup extends Component {
  onSignUp = (ev) => {
    ev.preventDefault()
    const {value} = ev.target.elements.name
    if(value === '') return 
    console.log(value);
    userService.signup(value)
    this.props.history.push('/')
  }

  render() {
    return (
      <section>
        <h2>Signup for more!</h2>
        <form onSubmit={this.onSignUp} className='signup-form'>
          <label htmlFor="name">Please enter your name</label>
          <input type="text" name="name" id='name' />
          <button className='signup-btn'>Sign up</button>
        </form>
      </section>
    )
  }
}
