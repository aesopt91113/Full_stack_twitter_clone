import React from 'react';
import { handleErrors } from '@src/utils/fetchHelper';

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
    const query = new URLSearchParams(window.location.search);
    const redirect_url = query.get('redirect_url') || '/';
    window.location = redirect_url;
  })
  .catch(error => {
    if (errorCB) errorCB(error);
  })
}
