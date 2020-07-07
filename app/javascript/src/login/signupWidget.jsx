// signupWidget.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { handleErrors } from '@src/utils/fetchHelper';
import { signup, login } from '@src/login/loginCode';

class SignupWidget extends React.Component {
  state = {
    params: {
      username: '',
      email: '',
      password: '',
    },
    error: '',
  }

  handleChange = (e) => {
    const oldParams = this.state.params
    this.setState({
      params: {
        ...oldParams,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSignup(e) {
    signup(e, this.state.params)
  }

  handlelogin(e) {
    login(e, this.state.params)
  }

  render() {
    const { username, password, email } = this.state;

    console.log(this.state.params)
    return (
      <form onSubmit={this.signup}>
        <div className="form-group">
          <p className="font-weight-bold d-inline">New to Twitter?</p>
          <a href="/" className="d-inline"o>Sign Up</a>
          <input type="text" className="form-control" placeholder="Username" onChange={this.handleChange} name="username" value={username} />
          <input type="text" className="form-control" placeholder="Email" onChange={this.handleChange} name="email" value={email} />
          <input type="text" className="form-control" placeholder="Password" onChange={this.handleChange} name="password" value={password} />
          <button type="submit" className="btn btn-warning d-inline">Sign up for Twitter</button>
        </div>
      </form>
    )
  }
}

export default SignupWidget;
