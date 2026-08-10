// __tests__/Navbar.test.tsx
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

test('renders brand name in Navbar', () => {
  render(<Navbar />);
  const brand = screen.getByText(/MerciTrader/i);
  expect(brand).toBeInTheDocument();
});
