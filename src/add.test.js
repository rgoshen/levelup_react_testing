import { add } from './add';

// unit test

test('add', () => {
  // option 1
  // const value = add(1, 2);
  // expect(value).toBe(3);

  // option 2
  expect(add(1, 2)).toBe(3);
  //   expect(add).toHaveBeenCalledTimes(1);
  //   expect(add).toHaveBeenCalledWith(1, 2);
  expect(add(2, 5)).toBe(7);
});
