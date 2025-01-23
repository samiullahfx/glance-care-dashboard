import React from 'react';
import { render } from '@testing-library/react';
import MovieDetailsCard from './MovieDetailsCard';
import data from '../data/api.json';

describe('MovieDetailsCard', () => {
  test('renders Movie Details', () => {
    const movie = data[0];
    const { getByText } = render(<MovieDetailsCard movie={movie} />);
    expect(getByText(`Movie - ${movie.title}`)).toBeInTheDocument();
    // expect(getByText(`Cast: ${movie.cast.join(", ")}`)).toBeInTheDocument();
    // expect(getByText(`Language(s): ${movie.language.join(", ")}`)).toBeInTheDocument();
    // expect(getByText(`Year: ${movie.year}`)).toBeInTheDocument();
    // expect(getByText(`Genre: ${movie.genre.join(", ")}`)).toBeInTheDocument();
    // expect(getByText(`IMDB Rating: ${movie.imdb_rating} / 10`)).toBeInTheDocument();
    // expect(getByText(`Oscar Wins: ${movie.oscar_winning}`)).toBeInTheDocument();
    // expect(getByText(`Oscar Nominations: ${movie.oscar_nominations}`)).toBeInTheDocument();
    // expect(getByText(`Oscar Winning List: ${movie.oscar_winning_list.length > 0 ? movie.oscar_winning_list.join(", ") : "N/A"}`)).toBeInTheDocument();
    // expect(getByText(`Oscar Nominations List: ${movie.oscar_nominations_list.length > 0 ? movie.oscar_nominations_list.join(", ") : "NA"}`)).toBeInTheDocument();
  });
});
