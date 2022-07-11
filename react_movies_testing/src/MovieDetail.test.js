import React from 'react';
import { render, cleanup } from 'react-testing-library';
import MovieDetail from './MovieDetail';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup;
  console.error.mockClear(); // reset after each test
});

const match = {
  params: {
    id: 'movieid',
  },
};

console.error = jest.fn();

test('<MovieDetail />', () => {
  fetch.mockResponseOnce(
    JSON.stringify({
      movie: {
        id: 'hi',
        title: 'some movie title',
      },
    })
  );

  const { debug } = render(<MovieDetail match={match} />);
  debug();
});
