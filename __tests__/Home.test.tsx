// __tests__/Home.test.tsx
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

test('renders brand name on home page', () => {
  render(<Home />);
  const brandElements = screen.getAllByText(/MerciTrader/i);
  expect(brandElements.length).toBeGreaterThan(0);
});

test('renders Learn More links for each business card', () => {
  render(<Home />);
  const learnMoreLinks = screen.getAllByRole('link', { name: /learn more/i });
  expect(learnMoreLinks.length).toBe(3);
  expect(learnMoreLinks[0]).toHaveAttribute('href', '/businesses/al-sadiq-bricks-kiln');
  expect(learnMoreLinks[1]).toHaveAttribute('href', '/businesses/merci-mart');
  expect(learnMoreLinks[2]).toHaveAttribute('href', '/businesses/merci-rice');
});
