import { Login, Logout, SignUp } from '../pages';

const ROUTES = {
  PRIVATE: [{ PATH: `/logout`, NAME: `logout`, component: Logout }],
  PUBLIC: [
    { PATH: `/sign-up`, NAME: `signUp`, component: SignUp },
    { PATH: `/login`, NAME: `login`, component: Login },
  ],
};

export default ROUTES;
