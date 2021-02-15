import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { login, logout } from '../__mocks__/user';
import App from '../App';
import { JWT_TOKEN } from '__mocks__/request';

export const USER_TOKEN = `USER_TOKEN`;

beforeEach(() => {
  localStorage.clear();
  jest.resetAllMocks();
});

describe('App', () => {
  describe('Login', () => {
    it('renders login', () => {
      const { container } = render(<App />);
      expect(container).toMatchSnapshot();
    });

    it('moves to logout when login', async () => {
      const { getByPlaceholderText } = render(<App />);
      const userInput = getByPlaceholderText(`User`);
      const pwInput = getByPlaceholderText(`Password`);
      userInput.setAttribute(`value`, 'mark@example.com');
      pwInput.setAttribute(`value`, 'Mark1234567');
      fireEvent.click(screen.getByText('Login'));
      await login(userInput.getAttribute(`value`) || ``, pwInput.getAttribute(`value`) || ``);
      await waitFor(() => screen.getByRole('button'));
      expect(screen.getByRole('button')).toHaveTextContent('Logout');
      expect(localStorage.setItem).toHaveBeenLastCalledWith(USER_TOKEN, JWT_TOKEN);
    });

    it('Throw error if wrong password', async () => {
      try {
        render(<App />);
        await login('mark@example.com', 'wrongpassword');
      } catch (error) {
        expect(error.message).toBeTruthy();
      }
      expect(localStorage.setItem).toHaveBeenCalledTimes(0);
    });
  });

  describe('Logout', () => {
    const loginAfterRender = async () => {
      const res = render(<App />);
      fireEvent.click(screen.getByText('Login'));
      await login('mark@example.com', 'Mark1234567');
      return res;
    };

    it('renders logout', async () => {
      const { container } = await loginAfterRender();
      expect(container).toMatchSnapshot();
    });

    it('moves to login screen', async () => {
      await loginAfterRender();
      fireEvent.click(screen.getByText('Logout'));
      await logout();
      await waitFor(() => screen.getByRole('button'));
      expect(screen.getByRole('button')).toHaveTextContent('Login');
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
    });
  });
});
