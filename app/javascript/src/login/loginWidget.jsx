import React from 'react';
import ReactDOM from 'react-dom';
import { login } from '@src/login/loginCode';

class LoginWidget extends React.Component {
  state = {
    params: {
      username: '',
      password: '',
    },
    error: '',
  }

  handleChange = (e) => {
    this.setState ({
      [e.target.name]: event.target.value
    });
  }

  login = (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      error: '',
    });

    fetch('/api/sessions', {
      method: 'POST',
      body: JSON.stringify({})
    }).then(function (resp) {
      if (resp.success) {
        const params = new URLSearchParams(window.location.search);
        const redirect_url = params.get('redirect_url') || '/';
        window.location = redirect_url;
      }
    }).catch(function (err) {
      this.setState({
        error: 'Could not log in.'
      })
    })
  }

  render () {
    return (
      <form onSubmit={this.login}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Password" />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary">Log in</button>
          </div>
        </div>
      </form>
    )
  }
}

export default LoginWidget;
