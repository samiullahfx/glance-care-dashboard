import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TopPerformers from './TopPerformers';
import data from '../data/api.json';

describe('TopPerformers', () => {
  test('renders Top Performers', () => {
    const { getByText } = render(<TopPerformers data={data} setSelectedMovie={jest.fn()} />);
    expect(getByText('Top Performers')).toBeInTheDocument();
  });

  test('clicks on a movie', () => {
    const setSelectedMovie = jest.fn();
    const { getByText } = render(<TopPerformers data={data} setSelectedMovie={setSelectedMovie} />);

    fireEvent.click(getByText('The Shawshank Redemption'));
    expect(setSelectedMovie).toHaveBeenCalledWith(data[0]);
  });
});
