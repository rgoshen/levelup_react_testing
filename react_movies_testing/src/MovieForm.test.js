import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from './MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn();

test('<MovieForm/>', () => {
  const { queryByTestId, container, getByText } = render(
    <MovieForm submitForm={onSubmit} />
  );

  expect(queryByTestId('movie-form')).toBeTruthy();

  const submitBtn = getByText('Submit');
  fireEvent.click(submitBtn);

  expect(onSubmit).toHaveBeenCalledTimes(1);
});
