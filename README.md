# React Testing for Beginners

[![React Testing Library](assets/images/reactjs.png)](https://testing-library.com/docs/react-testing-library/intro/)

## TOC

- [React Testing for Beginners](#react-testing-for-beginners)
  - [TOC](#toc)
  - [Jest Explained](#jest-explained)
  - [Writing Unit Tests with Jest](#writing-unit-tests-with-jest)
  - [Writing Integration Tests](#writing-integration-tests)
  - [Mock Functions & Why](#mock-functions--why)
  - [Mocking Modules](#mocking-modules)
  - [Introduction to React Testing](#introduction-to-react-testing)
  - [React Testing Library & Debug](#react-testing-library--debug)
  - [Testing with Test Ids](#testing-with-test-ids)
  - [Events in React Testing Library](#events-in-react-testing-library)
  - [Integration Testing in React & Cleanup](#integration-testing-in-react--cleanup)
  - [Snapshot Testing 101](#snapshot-testing-101)
  - [Spying & Mocking Functions in React](#spying--mocking-functions-in-react)
  - [Form Events With Controlled Inputs](#form-events-with-controlled-inputs)
  - [Testing for Errors & Global Mocks](#testing-for-errors--global-mocks)
  - [Negative Assertions & Testing With React Router](#negative-assertions--testing-with-react-router)
  - [What To Test](#what-to-test)
  - [Mocking Fetch](#mocking-fetch)
  - [Mocking Fetch Part 2 & Async Tests & Working With Data](#mocking-fetch-part-2--async-tests--working-with-data)
  - [Testing Loading States & More Pitfalls](#testing-loading-states--more-pitfalls)
  - [Refactoring with Tests](#refactoring-with-tests)
  - [Code Coverage](#code-coverage)

## Jest Explained

[Jest](https://jestjs.io/)

_src/App.test.js_

```javascript
// should pass
test('fake test', () => {
  expect(true).toBeTruthy();
});

// should fail
test('fake test', () => {
  expect(false).toBeTruthy();
});
```

![test_pass_output](assets/images/test_output_all_pass_example.png)

![test_fail_output](assets/images/test_output_fail_example.png)

[top](#toc)

## Writing Unit Tests with Jest

Unit Test - should test just one thing

_src/App.js_

```javascript
export const add = (x, y) => x + y;
```

_src/App.test.js_

```javascript
import { add } from './App';

// should pass
test.skip('fake test', () => {
  expect(true).toBeTruthy();
});

// should fail
test.skip('fake test', () => {
  expect(false).toBeTruthy();
});

test('add', () => {
  // option 1
  // const value = add(1, 2);
  // expect(value).toBe(3);

  // option 2
  expect(add(1, 2)).toBe(3);
  expect(add(2, 5)).toBe(7);
});
```

![first unit test output](assets/images/first_unit_test_output.png)

[top](#toc)

## Writing Integration Tests

Tests where one unit interacts with another unit

_src/App.js_

```javascript
export const add = (x, y) => x + y;

export const total = (shipping, subTotal) => `$${add(shipping, subTotal)}`;
```

_src/App.test.js_

```javascript
import { add, total } from './App';

test('add', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(2, 5)).toBe(7);
});

// integration test b/c not only testing total function but also the add function and its output to total function
test('total', () => {
  expect(total(5, 20)).toBe('$25');
});
```

[top](#toc)

## Mock Functions & Why

- mock a function that may not be accessable to the current test but an assertion relies on what comes back from that function in order to test what it needs to test in the function it is designed to test
  - mock api calls
  - mock database calls

_src/App.test.js_

```javascript
import { total } from './App';

const add = jest.fn(() => 3); // mocking the add function

test('add', () => {
  expect(add(1, 2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1, 2);
});
```

![Mock test pass](assets/images/mock_test_pass_1.png)

[top](#toc)

## Mocking Modules

- mock the import and then mock the implementation of what we mock imported

_src/add.js_

```javascript
export const add = (x, y) => x + y;
```

_src/add.test.js_

```javascript
import { add } from './add';

// unit test

test('add', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(2, 5)).toBe(7);
});

```

_src/App/js_

```javascript
import { add } from './add';

export const total = (shipping, subTotal) => `$${add(shipping, subTotal)}`;
```

_src/App.test.js_

```javascript
import { total } from './App';
import { add } from './add';

jest.mock('./add', () => ({
  add: jest.fn(() => 25),
}));

test('total', () => {
  expect(total(5, 20)).toBe('$25');
  expect(add).toHaveBeenCalledTimes(1); // spy on add function

  // Redundant
  add.mockImplementation(() => 30);

  expect(total(5, 25)).toBe('$30');
  expect(add).toHaveBeenCalledTimes(2); // spy on add function
});
```

![mock module pass](assets/images/mock_module_pass.png)

[top](#toc)

## Introduction to React Testing

[top](#toc)

## React Testing Library & Debug

[top](#toc)

## Testing with Test Ids

[top](#toc)

## Events in React Testing Library

[top](#toc)

## Integration Testing in React & Cleanup

[top](#toc)

## Snapshot Testing 101

[top](#toc)

## Spying & Mocking Functions in React

[top](#toc)

## Form Events With Controlled Inputs

[top](#toc)

## Testing for Errors & Global Mocks

[top](#toc)

## Negative Assertions & Testing With React Router

[top](#toc)

## What To Test

[top](#toc)

## Mocking Fetch

[top](#toc)

## Mocking Fetch Part 2 & Async Tests & Working With Data

[top](#toc)

## Testing Loading States & More Pitfalls

[top](#toc)

## Refactoring with Tests

[top](#toc)

## Code Coverage

[top](#toc)
