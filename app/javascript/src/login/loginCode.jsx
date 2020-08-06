import React from 'react';
import { handleErrors } from '@src/utils/fetchHelper';
import Layout from '../layout';
import LoggedIn from '@src/loggedIn';

export const signup = (e, params, errorCB) => {
  if (e) { e.preventDefault(); }

  console.log(JSON.stringify({
    user: params
  }))

  fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      user: params
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(handleErrors)
  .then(response => {
    login(null, params)
  })
  .catch(error => {
    if (errorCB) errorCB(error)
  })
}

export const login = (e, params, errorCB) => {
  if (e) { e.preventDefault(); }

  fetch('api/sessions', {
    method: 'POST',
    body: JSON.stringify({
      user: params
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(handleErrors)
  .then(response => {
    console.log(response)
    Authenicate;
    // const query = new URLSearchParams(window.location.search);
    // const redirect_url = query.get('redirect_url') || '/';
    // window.location = redirect_url;
    LoggedIn;
  })
  .catch(error => {
    if (errorCB) errorCB(error);
  })
}

class Authenicate extends React.Component {
  state = {
    authenicated: false,
    show_login: true,
  }

  ComponentDidMount() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        console.log(data)
        this.setState({
          authenicated: data.authenicated,
        })
      })
  }

  toggle = () => { 
    this.setState({
      show_login: !this.state.show_login,
    })
  }

  render () {
    const { authenticated, show_login } = this.state;

    if (authenticated) {
      return (
        <Layout>
          <h1>u are already logged in</h1>
        </Layout>
      )
    };

    return (
      <Layout>
        <h1>you are now logged in</h1>
      </Layout>
    )
  };
}

export default Authenicate;