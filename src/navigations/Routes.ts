import { Login, Logout, SignUp } from '../pages';

const ROUTES = {
  PRIVATE: [{ PATH: `/logout`, NAME: `logout`, component: Logout }],
  PUBLIC: [
    { PATH: `/login`, NAME: `login`, component: Login },
    { PATH: `/sign-up`, NAME: `signUp`, component: SignUp },
  ],
};

export default ROUTES;
