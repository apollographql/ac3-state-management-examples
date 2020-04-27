
// This is how to create a mock reactive variable.
// It's a good idea to do this because then we can test our
// interaction logic.

import { ReactiveVar } from "@apollo/client";

export function createMockReactiveVar<T> (defaultValue?: T): ReactiveVar<T> {
  let currentValue: T | undefined = defaultValue;

  return function mockReactiveVar (
    newValue?: T
  ) : T {
    if (newValue) {
      currentValue = newValue;
    }
    return currentValue as T;
  }
}