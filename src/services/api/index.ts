import http from 'http';

type Response = {
  token: string;
};

export function singIn(email: string, password: string): Promise<Response> {
  return new Promise<Response>((resolve) => {
    http.get({ path: `/sign-in?user=${email}&password=${password}` }, (response) => {
      response.on('data', () => {});
      response.on('end', () => resolve({ token: `somerandomtoken` }));
    });
  });
}

export function createUser(role: string, email: string, password: string, passwordConfirmation: string) {
  return new Promise<void>((resolve) => {
    http.get(
      { path: `/sign-in?role=${role}&user=${email}&password=${password}&passwordConfirmation=${passwordConfirmation}` },
      (response) => {
        response.on('data', () => {});
        response.on('end', () => resolve());
      }
    );
  });
}
