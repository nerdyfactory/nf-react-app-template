import http from 'http';

export default function request(url: string) {
  return new Promise((resolve) => {
    http.get({ path: url }, (response) => {
      let data = '';
      response.on('data', (_data) => (data += _data));
      response.on('end', () => resolve(data));
    });
  });
}
