import { handleErrors } from '@src/utils/fetchHelper';

export const signup = (e, params, errorCB, history) => {
  if (e) { e.preventDefault(); }
  // console.log(history)
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
    console.log(params)
    login(e, params, null, history)
  })
  .catch(error => {
    if (errorCB) errorCB(error)
  })
}

//------------------------------------------------------------------
export const login = (e, params, errorCB, history) => {
  if (e) { e.preventDefault(); }

  console.log(params.username)
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
    console.log(params.username, history)
    const query = new URLSearchParams(window.location.search);
    const redirect_url = query.get('redirect_url') || '/';
    history.push(`/users/${params.username}`)
  })
  .catch(error => {
    if (errorCB) errorCB(error);
  })
}
