import React from 'react';
import { render } from '@testing-library/react';
import CountryInsights from './CountryInsights';
import data from '../data/api.json';

// Mock ResponsiveContainer
jest.mock('recharts', () => {
    const OriginalRecharts = jest.requireActual('recharts');
    return {
        ...OriginalRecharts,
        ResponsiveContainer: ({ children }) => <div>{children}</div>,
    };
});

describe('CountryInsights', () => {
    test('renders Country Insights', () => {
        const { getByText } = render(<CountryInsights data={data} />);
        expect(getByText('Country Insights')).toBeInTheDocument();
    });
});
