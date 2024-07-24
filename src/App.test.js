import { render, screen } from '@testing-library/react';
import App from './App';
// import { render } from 'react-dom/test-utils';
import { act } from 'react';





// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders To-Do List title', () => {
  render(<App />);
  const titleElement = screen.getByText(/To-Do List/i);
  expect(titleElement).toBeInTheDocument();
});


