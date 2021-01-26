export type User = {
  id: string;
  name: string;
};

type Error = {
  error: string;
};

export const users: User[] = [
  { id: 'ce9cac2e-e3be-4df9-a7ba-2fb1f99cc8fd', name: 'Mark' },
  { id: '9184da41-a5bd-4e14-843c-740986652d5c', name: 'Paul' },
];

export default function request(url: string) {
  return new Promise(
    (resolve: (user: User) => void, reject: (reason?: Error) => void): void => {
      const userID = url.substr('/users/'.length);
      const user = users.find((u) => u.id == userID);
      process.nextTick(() =>
        user
          ? resolve(user)
          : reject({
              error: 'User with ' + userID + ' not found.',
            })
      );
    }
  );
}
