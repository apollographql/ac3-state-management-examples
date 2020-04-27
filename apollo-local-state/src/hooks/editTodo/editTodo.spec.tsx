
import createEditTodo from './editTodo'
import { mockTodosVar } from '../../cache.spec'

const editTodo = createEditTodo(mockTodosVar);

describe('editTodo hook', () => {
  beforeEach(() => mockTodosVar([]));
  
  it('should mark a todo as completed', () => {
    mockTodosVar([{ id: 0, text: 'First todo', completed: false }])
    editTodo(0, "This was edited");

    expect(
      mockTodosVar()[0].text
    ).toEqual("This was edited")
  });
})


