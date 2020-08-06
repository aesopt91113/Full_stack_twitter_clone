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

export const login = (e, params, errorCB, history) => {
  if (e) { e.preventDefault(); }

  console.log('login trigger')

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
    history.push(`/user/${params.username}`)
  })
  .catch(error => {
    if (errorCB) errorCB(error);
  })
}
