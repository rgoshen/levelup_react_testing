// import { add, total } from './App';
import { total } from './App';
import { add } from './add';

// const add = jest.fn(() => 3); // mocking the add function
jest.mock('./add', () => ({
  add: jest.fn(() => 25),
})); // mock

// should pass
// test.skip('fake test', () => {
//   expect(true).toBeTruthy();
// });

// should fail
// test.skip('fake test', () => {
//   expect(false).toBeTruthy();
// });

// integration test b/c not only testing total function but also the add function and its output to total function
test('total', () => {
  // total(2, 5);
  expect(total(5, 20)).toBe('$25');
  expect(add).toHaveBeenCalledTimes(1); // spy on add function

  // Redundant
  add.mockImplementation(() => 30);

  expect(total(5, 25)).toBe('$30');
  expect(add).toHaveBeenCalledTimes(2); // spy on add function
});
