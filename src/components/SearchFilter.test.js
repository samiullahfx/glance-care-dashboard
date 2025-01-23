import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchFilter from './SearchFilter';
import data from '../data/api.json';

describe('SearchFilter', () => {
  test('renders Search and Filter', () => {
    const setFilteredData = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <SearchFilter data={data} setFilteredData={setFilteredData} />
    );
    expect(getByText('Search and Filter')).toBeInTheDocument();
    expect(getByPlaceholderText('Search by movie name...')).toBeInTheDocument();
  });

  test('filters by movie name', () => {
    const setFilteredData = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchFilter data={data} setFilteredData={setFilteredData} />
    );

    fireEvent.change(getByPlaceholderText('Search by movie name...'), { target: { value: 'Godfather' } });
    expect(setFilteredData).toHaveBeenCalled();
  });
});
