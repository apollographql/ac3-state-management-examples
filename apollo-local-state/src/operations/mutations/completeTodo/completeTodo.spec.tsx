
import createCompleteTodo from './completeTodo'
import { mockTodosVar } from '../../../tests/mocks/mockTodosVar';

const completeTodo = createCompleteTodo(mockTodosVar);

describe('completeTodo hook', () => {
  beforeEach(() => mockTodosVar([]));
  
  it('should mark a todo as completed', () => {
    mockTodosVar([{ id: 0, text: 'First todo', completed: false }])
    completeTodo(0);

    expect(
      mockTodosVar()[0].completed
    ).toBeTruthy()
  })
})
