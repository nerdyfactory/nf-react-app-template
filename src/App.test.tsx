import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders app', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  describe('Login', () => {
    it('moves to logout when login', async () => {
      render(<App />);
      fireEvent.click(screen.getByText('Login'));
      await waitFor(() => screen.getByRole('button'));
      expect(screen.getByRole('button')).toHaveTextContent('Logout');
    });
  });

  describe('Logout', () => {
    const loginAfterRender = () => {
      render(<App />);
      fireEvent.click(screen.getByText('Login'));
    };

    it('moves to login screen', async () => {
      loginAfterRender();
      fireEvent.click(screen.getByText('Logout'));
      await waitFor(() => screen.getByRole('button'));
      expect(screen.getByRole('button')).toHaveTextContent('Login');
    });
  });
});
