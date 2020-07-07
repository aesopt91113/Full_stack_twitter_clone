// fetchHelper.js - error and helper functions

export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}
