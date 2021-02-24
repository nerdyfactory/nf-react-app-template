import http from 'http';

export function singIn(email: string, password: string) {
  return new Promise((resolve) => {
    http.get({ path: `/sign-in?user=${email}&password=${password}` }, (response) => {
      let data = '';
      response.on('data', (_data) => (data += _data));
      response.on('end', () => resolve(data));
    });
  });
}
