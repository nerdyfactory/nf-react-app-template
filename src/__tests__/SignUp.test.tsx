import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import 'jest-localstorage-mock';
import App from '../App';
import { ERROR_MESSAGES } from 'constants/utility';

jest.mock('../services/api');

const VALID_EMAIL = 'test@test.com';
const VALID_PASSWORD = 'test1234';

describe('Sign Up', () => {
  it('renders Sign Up', async () => {
    const res = render(<App />);
    fireEvent.click(screen.getByText('Create account'));
    expect(res.container).toMatchSnapshot();
  });

  it('catches empty fields', async () => {
    render(<App />);
    fireEvent.input(screen.getByPlaceholderText('Email'), {
      target: {
        value: ``,
      },
    });
    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: {
        value: ``,
      },
    });
    fireEvent.input(screen.getByPlaceholderText('Confirm Password'), {
      target: {
        value: ``,
      },
    });
    fireEvent.click(screen.getByText('Sign Up'));
    await waitFor(() => screen.getByText('Sign Up'));
    expect(screen.getAllByText(ERROR_MESSAGES.REQUIRED_FIELD).length).toBe(3);
  });

  it('catches invalid email', async () => {
    render(<App />);
    fireEvent.input(screen.getByPlaceholderText('Email'), {
      target: {
        value: `wrong_username`,
      },
    });
    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: {
        value: VALID_PASSWORD,
      },
    });
    fireEvent.input(screen.getByPlaceholderText('Confirm Password'), {
      target: {
        value: VALID_PASSWORD,
      },
    });
    fireEvent.click(screen.getByText('Sign Up'));
    await waitFor(() => screen.getByText('Sign Up'));
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('Sign Up');
    expect(screen.getByText(ERROR_MESSAGES.INVALID_EMAIL)).toBeInTheDocument();
  });

  it('catches invalid password', async () => {
    render(<App />);
    fireEvent.input(screen.getByPlaceholderText('Email'), {
      target: {
        value: VALID_EMAIL,
      },
    });
    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: {
        value: `test`,
      },
    });
    fireEvent.input(screen.getByPlaceholderText('Confirm Password'), {
      target: {
        value: `test`,
      },
    });
    fireEvent.click(screen.getByText('Sign Up'));
    await waitFor(() => screen.getByText('Sign Up'));
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('Sign Up');
    expect(screen.getByText(ERROR_MESSAGES.PASSWORD_INVALID)).toBeInTheDocument();
  });

  it('catches passwords not matching', async () => {
    render(<App />);
    fireEvent.input(screen.getByPlaceholderText('Email'), {
      target: {
        value: VALID_EMAIL,
      },
    });
    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: {
        value: `test1234`,
      },
    });
    fireEvent.input(screen.getByPlaceholderText('Confirm Password'), {
      target: {
        value: `test4321`,
      },
    });
    fireEvent.click(screen.getByText('Sign Up'));
    await waitFor(() => screen.getByText('Sign Up'));
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('Sign Up');
    expect(screen.getByText(ERROR_MESSAGES.PASSWORD_NOT_MATCHING)).toBeInTheDocument();
  });

  it('moves to login after sign up', async () => {
    render(<App />);
    fireEvent.input(screen.getByPlaceholderText('Email'), {
      target: {
        value: VALID_EMAIL,
      },
    });
    fireEvent.input(screen.getByPlaceholderText('Password'), {
      target: {
        value: VALID_PASSWORD,
      },
    });
    fireEvent.input(screen.getByPlaceholderText('Confirm Password'), {
      target: {
        value: VALID_PASSWORD,
      },
    });
    fireEvent.click(screen.getByText('Sign Up'));
    await waitFor(() => screen.getByText('Sign Up'));
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('Login');
  });
});
