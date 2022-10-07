import jwtDecode from 'jwt-decode';

const TOKEN = 'token';
const USER = 'user';

interface MyToken {
  access_token: string;
  refresh_token: string;
}

export function storeToken(token: MyToken) {
  localStorage.setItem(TOKEN, JSON.stringify(token));
}

export function getToken() {
  return localStorage.getItem(TOKEN) || '""';
}

export function removeToken() {
  return localStorage.removeItem(TOKEN);
}

export function storeUser(user: any) {
  localStorage.setItem(USER, JSON.stringify(user));
}

export function getUser() {
  const rawUser = localStorage.getItem(USER);
  return rawUser && JSON.parse(rawUser);
}

export function removeUser() {
  localStorage.removeItem(USER);
}

export function isExpiredToken() {
  const token = getToken();
  if (!token) {
    return true;
  }
  const decodedJwt = jwtDecode<MyToken>(token);
  const currentTime = Date.now() / 1000;
  return decodedJwt.exp < currentTime;
}
