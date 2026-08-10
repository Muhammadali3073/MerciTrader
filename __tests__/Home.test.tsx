// __tests__/Home.test.tsx
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

test('renders brand name on home page', () => {
  render(<Home />);
  const brandElements = screen.getAllByText(/MerciTrader/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
