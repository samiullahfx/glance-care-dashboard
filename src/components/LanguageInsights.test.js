import React from 'react';
import { render } from '@testing-library/react';
import LanguageInsights from './LanguageInsights';
import data from '../data/api.json';

// Mock ResponsiveContainer
jest.mock('recharts', () => {
    const OriginalRecharts = jest.requireActual('recharts');
    return {
        ...OriginalRecharts,
        ResponsiveContainer: ({ children }) => <div>{children}</div>,
    };
});

describe('LanguageInsights', () => {
    test('renders Language Insights', () => {
        const { getByText } = render(<LanguageInsights data={data} />);
        expect(getByText('Language Insights')).toBeInTheDocument();
    });
});
