
import createClearCompletedTodos from './clearCompletedTodos'
import { mockTodosVar } from '../../../tests/mocks/mockTodosVar';

const clearCompletedTodos = createClearCompletedTodos(mockTodosVar);

describe('clearCompletedTodos hook', () => {
  beforeEach(() => mockTodosVar([]));
  
  it('should clear a list of completed todos', () => {
    mockTodosVar([{ id: 0, text: 'Completed todo', completed: true }])
    clearCompletedTodos();

    expect(
      mockTodosVar()
    ).toHaveLength(0)
  })

  it('should not clear todos that are not completed', () => {
    mockTodosVar([
      { id: 0, text: 'Completed todo', completed: true },
      { id: 1, text: 'Not completed todo', completed: false }
    ])
    clearCompletedTodos();

    expect(
      mockTodosVar()
    ).toHaveLength(1)

    expect(
      mockTodosVar()[0].text
    ).toEqual('Not completed todo')

  })
})
