import { Login, Home, SignUp, Admin } from '../pages';

const ROUTES = {
  PRIVATE: [
    { PATH: `/home`, NAME: `home`, component: Home },
    { PATH: `/admin`, NAME: `admin`, component: Admin },
  ],
  PUBLIC: [
    { PATH: `/login`, NAME: `login`, component: Login },
    { PATH: `/sign-up`, NAME: `signUp`, component: SignUp },
  ],
};

export default ROUTES;
