import React from 'react';

signup(e) {
  if (e) { e.preventDefault(); }
  this.setState({
    error: '',
  });

  fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      user: this.state.params
    })
  })
  .then(handleErrors)
  .then(response => {
    if (response.user) {
      console.log(response)
      this.login();
    }
  })
  .catch(error => {
    this.setState({
      error: 'Could not sign up.',
    })
  })
}

login(e) {
  if (e) { e.preventDefault(); }
  this.setState({
    error: '',
  })

  console.log('login button triggered')

  fetch('api/sessions', {
    method: 'POST',
    body: JSON.stringify({
      user: this.state.params
    })
  })
  .then(handleErrors)
  .then(response => {
    if (response.success) {
      const params = new URLSearchParams(window.location.search);
      const redirect_url = params.get('redirect_url') || '/';
      window.location = redirect_url;
    }
  })
  .catch(error => {
    this.setState({
      error: 'Could not log in.',
    })
  })
}

export default loginCode;
