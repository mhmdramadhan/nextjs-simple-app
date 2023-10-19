import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders "Hello World" as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see" you if the button was NOT clicked', () => {
    render(<Greeting />);

    const paragrafElement = screen.getByText('good to see you', {
      exact: false,
    });
    expect(paragrafElement).toBeInTheDocument();
  });

  test('render "Changed!" if the button was clicked', () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const paragrafElement = screen.getByText('Changed!');
    expect(paragrafElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const paragrafElement = screen.queryByText('good to see you', {
      exact: false,
    });
    expect(paragrafElement).toBeNull();
  });
});
