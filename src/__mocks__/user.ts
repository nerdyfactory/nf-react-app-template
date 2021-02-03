import { USER_TOKEN } from '__tests__/App.test';
import { User, requestUser, singIn } from './request';

export async function getUserName(userID: string) {
  const user: User = await requestUser('/users/' + userID);
  return user.name;
}

export async function login(username: string, password: string) {
  const token: string = await singIn(username, password);
  if (token) {
    localStorage.setItem(USER_TOKEN, token);
  }
}

export async function logout() {
  localStorage.removeItem(USER_TOKEN);
}
