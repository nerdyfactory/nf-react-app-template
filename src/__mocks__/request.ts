export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

type Error = {
  message: string;
};

export const JWT_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MTIzMDU3NDAsImV4cCI6MTY0Mzg0MTc0MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.SZRQKnoU4eRGkO4cuD5QJAkEGGLlBbB5xxZH2V-jMzE';

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
            error: 'User with ' + userID + ' not found.',
          })
    );
  });
}

export function singIn(email: string, password: string) {
  return new Promise((resolve: (token: string) => void, reject: (reason?: Error) => void): void => {
    const user = users.find((u) => u.email == email && u.password == password);
    process.nextTick(() =>
      user
        ? resolve(JWT_TOKEN)
        : reject({
            message: 'User not found. Check your credentials or sing up.',
          })
    );
  });
}
