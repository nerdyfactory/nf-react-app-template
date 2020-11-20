import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  describe('Login', () => {
    it('renders login', () => {
      const { container } = render(<App />);
      expect(container).toMatchSnapshot();
    });
    it('moves to logout when login', async () => {
      render(<App />);
      fireEvent.click(screen.getByText('Login'));
      await waitFor(() => screen.getByRole('button'));
      expect(screen.getByRole('button')).toHaveTextContent('Logout');
    });
  });

  describe('Logout', () => {
    const loginAfterRender = () => {
      const res = render(<App />);
      fireEvent.click(screen.getByText('Login'));
      return res;
    };

    it('renders logout', async () => {
      const { container } = loginAfterRender();
      expect(container).toMatchSnapshot();
    });

    it('moves to login screen', async () => {
      loginAfterRender();
      fireEvent.click(screen.getByText('Logout'));
      await waitFor(() => screen.getByRole('button'));
      expect(screen.getByRole('button')).toHaveTextContent('Login');
    });
  });
});
