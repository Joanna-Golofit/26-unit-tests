import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {

  test('renders Greeting text', () => { 
    render(<Greeting />);
    const myElement = screen.getByText('Greeting');
    expect(myElement).toBeInTheDocument();
  });

  test('renders tutaj text', () => { 
    render(<Greeting />);
    const myElement = screen.getByText('tutaj');
    expect(myElement).toBeInTheDocument();
  });

  test('renders "nie" text if the button was not yet clicked', () => { 
    render(<Greeting />);
    const myElement = screen.getByText('nie', { exact: false });
    expect(myElement).toBeInTheDocument();
  });

  test('renders "tak" text if the button wac clicked', () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    const myElement = screen.getByText('tak');
    expect(myElement).toBeInTheDocument();
  });

  test('no longer renders "nie" text if the button wac clicked', () => {
    render(<Greeting />);
    const myElement2 = screen.getByText('nie', { exact: false });
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    expect(myElement2).not.toBeInTheDocument();
  });

  test('no longer renders "nie" text if the button wac clicked2 ', () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
    const myElement2 = screen.queryByText('nie!');
    expect(myElement2).toBeNull();
  });
})