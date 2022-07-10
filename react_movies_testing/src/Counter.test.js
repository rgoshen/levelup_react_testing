import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Counter from './Counter';

test('<Counter />', () => {
  const wrapper = render(<Counter />);
  //   wrapper.debug();

  expect(wrapper.getByText('0').tagName).toBe('BUTTON');
  //   console.log(wrapper.getByText('0'));
  //   console.log(wrapper.getByText('0').textContent);
  //   console.log(wrapper.getByText('0').tagName);
});
