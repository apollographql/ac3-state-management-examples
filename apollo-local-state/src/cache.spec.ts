
import { Todos } from "./models/Todos";
import { VisiblityFilter, VisibilityFilters } from "./models/VisibilityFilter";

// This is how to create a mock reactive variable.
// It's a good idea to do this because then we can test our
// interaction logic.

export function createMockReactiveVar<T> () {
  let currentValue: T;

  return function mockReactiveVar (
    newValue?: T | undefined
  ) : T {
    if (newValue) {
      currentValue = newValue;
    }
    return currentValue;
  }
}

const mockTodosVar = createMockReactiveVar<Todos>();

let currentVisibilityFilter: VisiblityFilter = VisibilityFilters.SHOW_ALL;

export function mockVisibilityFilter (newValue?: VisiblityFilter | undefined) : VisiblityFilter {
  if (newValue) {
    currentVisibilityFilter = newValue;
  }
  return currentVisibilityFilter;
}

describe('mockTodosVar', () => {
  beforeEach(() => mockTodosVar([]));

  it('should set the current value if provided', () => {
    mockTodosVar([{ id: 0, text: 'First todo', completed: false }]);
    expect(mockTodosVar().length).toEqual(1);
  })

  it('should overwrite the current value', () => {
    mockTodosVar([{ id: 0, text: 'First todo', completed: false }]);
    expect(mockTodosVar().length).toEqual(1);

    mockTodosVar([{ id: 1, text: 'Second todo', completed: false }]);
    expect(mockTodosVar().length).toEqual(1);
  });

  it('should not overwrite the current value if no value provided', () => {
    mockTodosVar([
      { id: 0, text: 'First todo', completed: false },
      { id: 1, text: 'Second todo', completed: false }
    ]);
    expect(mockTodosVar().length).toEqual(2);

    mockTodosVar();
    expect(mockTodosVar().length).toEqual(2);
  })
})