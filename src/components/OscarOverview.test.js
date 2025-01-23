import React from 'react';
import { render } from '@testing-library/react';
import OscarOverview from './OscarOverview';
import data from '../data/api.json';

// Mock ResponsiveContainer
jest.mock('recharts', () => {
  const OriginalRecharts = jest.requireActual('recharts');
  return {
    ...OriginalRecharts,
    ResponsiveContainer: ({ children }) => <div>{children}</div>,
  };
});

describe('OscarOverview', () => {
  test('renders Oscar statistics', () => {
    const { getByText } = render(<OscarOverview data={data} />);
    expect(getByText('Oscar Statistics')).toBeInTheDocument();
  });
});
