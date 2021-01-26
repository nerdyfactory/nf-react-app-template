import request, { User } from './request';

export async function getUserName(userID: string) {
  const user: User = await request('/users/' + userID);
  return user.name;
}
