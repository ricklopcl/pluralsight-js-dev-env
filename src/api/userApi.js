import 'whatwg-fetch';
// import { getBaseUrl } from "./baseUrl.js";

// const baseUrl = getBaseUrl();

const inDevelopoment = window.location.hostname === 'localhost';
const baseUrl = inDevelopoment ? 'http://localhost:3001/' : '/';

export function getUsers() {
  return get('users');
}

export function deleteUser(userId) {
  return del(`users/${userId}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// Can't call function delete since reserved word.
function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError)
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
