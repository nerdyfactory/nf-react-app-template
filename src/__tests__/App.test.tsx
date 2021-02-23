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

      fireEvent.input(getByPlaceholderText('User'), {
        target: {
          value: 'test',
        },
      });
      fireEvent.input(getByPlaceholderText('Password'), {
        target: {
          value: 'test1234',
        },
      });
      fireEvent.click(screen.getByText('Login'));
      await waitFor(() => screen.getByText('Login'));
      expect(screen.getByRole('button')).toHaveTextContent('Logout');
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    });
  });

  describe('Logout', () => {
    const loginAfterRender = async () => {
      const res = render(<App />);
      const { getByPlaceholderText } = res;

      fireEvent.input(getByPlaceholderText('User'), {
        target: {
          value: 'test',
        },
      });
      fireEvent.input(getByPlaceholderText('Password'), {
        target: {
          value: 'test1234',
        },
      });
      fireEvent.click(screen.getByText('Login'));
      await waitFor(() => screen.getByText('Login'));
      return res;
    };

    it('renders logout', async () => {
      const { container } = await loginAfterRender();
      expect(container).toMatchSnapshot();
    });

    it('moves to login screen', async () => {
      const { getAllByRole, getByText } = await loginAfterRender();
      fireEvent.click(getByText('Logout'));
      expect(getAllByRole('button')[0]).toHaveTextContent('Login');
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
    });
  });
});
