
import createAddTodo from './addTodo'
import { mockTodosVar } from '../../../tests/mocks/mockTodosVar';

const addTodo = createAddTodo(mockTodosVar);

describe('addTodos hook', () => {
  beforeEach(() => mockTodosVar([]));
  
  it('should add a todo', () => {
    addTodo('First todo')
    expect(
      mockTodosVar()
    ).toHaveLength(1)

    expect(
      mockTodosVar()[0].id
    ).toEqual(0)

    expect(
      mockTodosVar()[0].completed
    ).toEqual(false)

    expect(
      mockTodosVar()[0].text
    ).toEqual('First todo')
  })
})
