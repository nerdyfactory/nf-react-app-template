import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import 'jest-localstorage-mock';
import App from '../App';

jest.mock('../services/api');

describe('App Authentication', () => {
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

  describe('Sign Up', () => {
    it('renders Sign Up', async () => {
      const { container, getByText } = render(<App />);
      fireEvent.click(getByText('Create account'));
      waitFor(() => getByText('Create account'));
      expect(container).toMatchSnapshot();
    });
    it('moves to login after sign up', async () => {
      const { getByPlaceholderText } = render(<App />);
      fireEvent.input(getByPlaceholderText('User'), {
        target: {
          value: 'test',
        },
      });
      fireEvent.input(getByPlaceholderText('Password'), {
        target: {
          value: 'test12345',
        },
      });
      fireEvent.input(getByPlaceholderText('Confirm Password'), {
        target: {
          value: 'test12345',
        },
      });
      fireEvent.click(screen.getByText('Sign Up'));
      waitFor(() => screen.getByText('Sign Up'));
      expect(screen.getAllByRole('button')[0]).toHaveTextContent('Login');
    });
  });

  describe('Logout', () => {
    const loginAfterRender = async () => {
      const res = render(<App />);
      fireEvent.input(res.getByPlaceholderText('User'), {
        target: {
          value: 'test',
        },
      });
      fireEvent.input(res.getByPlaceholderText('Password'), {
        target: {
          value: 'test1234',
        },
      });
      fireEvent.click(res.getByText('Login'));
      await waitFor(() => res.getByText('Login'));
      return res;
    };

    it('renders logout', async () => {
      const { container } = await loginAfterRender();
      expect(container).toMatchSnapshot();
    });

    it('moves to login screen', async () => {
      await loginAfterRender();
      fireEvent.click(screen.getByText('Logout'));
      expect(screen.getAllByRole('button')[0]).toHaveTextContent('Login');
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
    });
  });
});
