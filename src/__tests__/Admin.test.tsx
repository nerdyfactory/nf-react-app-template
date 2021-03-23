import React from 'react';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import 'jest-localstorage-mock';
import App from '../App';

jest.mock('../services/api');

afterEach(cleanup);

const VALID_EMAIL = 'test@test.com';
const VALID_PASSWORD = 'test1234';

describe('Admin Page', () => {
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
    await waitFor(() => {
      fireEvent.click(screen.getByText('Admin console'));
    });
    return res;
  };

  it('renders admin', async () => {
    const { container } = await loginAfterRender();
    expect(container).toMatchSnapshot();
  });
});
