
import createDeleteTodo from './deleteTodo'
import { mockTodosVar } from '../../cache.spec'

const deleteTodo = createDeleteTodo(mockTodosVar);

describe('deleteTodo hook', () => {
  beforeEach(() => mockTodosVar([]));
  
  it('should mark a todo as completed', () => {
    mockTodosVar([{ id: 0, text: 'First todo', completed: false }])
    deleteTodo(0);

    expect(
      mockTodosVar().length
    ).toEqual(0)
  })
})

