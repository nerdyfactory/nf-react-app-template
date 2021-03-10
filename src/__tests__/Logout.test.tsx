import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import 'jest-localstorage-mock';
import App from '../App';

jest.mock('../services/api');

const VALID_EMAIL = 'test@test.com';
const VALID_PASSWORD = 'test1234';

describe('Logout', () => {
  const loginAfterRender = async () => {
    const res = render(<App />);
    fireEvent.input(screen.getByPlaceholderText('User'), {
      target: {
        value: VALID_EMAIL,
      },
    });
    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: {
        value: VALID_PASSWORD,
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
    await loginAfterRender();
    fireEvent.click(screen.getByText('Logout'));
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
  });
});
