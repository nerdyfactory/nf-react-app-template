import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import 'jest-localstorage-mock';
import App from '../App';

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
      await waitFor(() => screen.getByText('Logout'));
      expect(screen.getByRole('button')).toHaveTextContent('Logout');
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    });
  });

  describe('Logout', () => {
    const loginAfterRender = async () => {
      const res = render(<App />);
      const userInput = res.getByPlaceholderText(`User`);
      const pwInput = res.getByPlaceholderText(`Password`);
      userInput.setAttribute(`value`, 'mark@example.com');
      pwInput.setAttribute(`value`, 'Mark1234567');
      fireEvent.click(screen.getByText('Login'));
      return res;
    };

    it('renders logout', async () => {
      const { container } = await loginAfterRender();
      expect(container).toMatchSnapshot();
    });

    it('moves to login screen', async () => {
      await loginAfterRender();
      fireEvent.click(screen.getByText('Logout'));
      await waitFor(() => screen.getByText('Login'));
      expect(screen.getByText('Login')).toHaveTextContent('Login');
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
    });
  });
});
