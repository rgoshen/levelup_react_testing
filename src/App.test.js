// import { add, total } from './App';
import { total } from './App';

const add = jest.fn(() => 3); // mocking the add function

// should pass
// test.skip('fake test', () => {
//   expect(true).toBeTruthy();
// });

// should fail
// test.skip('fake test', () => {
//   expect(false).toBeTruthy();
// });

test('add', () => {
  // option 1
  // const value = add(1, 2);
  // expect(value).toBe(3);

  // option 2
  expect(add(1, 2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1, 2);
  // expect(add(2, 5)).toBe(7);
});

// integration test b/c not only testing total function but also the add function and its output to total function
// test('total', () => {
//   expect(total(5, 20)).toBe('$25');
// });
