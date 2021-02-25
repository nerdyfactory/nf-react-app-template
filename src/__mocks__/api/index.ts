export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

type Error = {
  message: string;
};

type Response = {
  token: string;
};

export const JWT_FAKE_TOKEN = `somerandomtoken`;

export const users: User[] = [
  { id: 'ce9cac2e-e3be-4df9-a7ba-2fb1f99cc8fd', name: 'Mark', email: 'mark@example.com', password: 'Mark1234567' },
  { id: '9184da41-a5bd-4e14-843c-740986652d5c', name: 'Paul', email: 'paul@example.com', password: 'Paul1234567' },
];

export function requestUser(url: string) {
  return new Promise((resolve: (user: User) => void, reject: (reason?: Error) => void): void => {
    const userID = url.substr('/users/'.length);
    const user = users.find((u) => u.id == userID);
    process.nextTick(() =>
      user
        ? resolve(user)
        : reject({
            message: 'User with ' + userID + ' not found.',
          })
    );
  });
}

export function singIn(email: string, password: string): Promise<Response> {
  return new Promise<Response>((resolve: (data: Response) => void, reject: (reason?: Error) => void): void => {
    const user = users.find((u) => u.email == email && u.password == password);
    process.nextTick(() =>
      user
        ? resolve({ token: JWT_FAKE_TOKEN })
        : reject({
            message: 'User not found. Check your credentials or sing up.',
          })
    );
  });
}

export function createUser(email: string, password: string, passwordConfirmation: string) {
  return new Promise((resolve: (token: string) => void, reject: (reason?: Error) => void): void => {
    process.nextTick(() =>
      !!email && !!password && !!passwordConfirmation && password === passwordConfirmation
        ? resolve(`user created`)
        : reject({
            message: 'User not found. Check your credentials or sing up.',
          })
    );
  });
}
