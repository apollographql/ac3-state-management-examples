
import createAddTodo from './addTodo'
// import { mockTodosVar } from '../../../tests/mocks/mockTodosVar';
import { cache, todosVar } from '../../../cache';
import { Todos } from '../../../models/Todos';

// const todosVar = cache.makeVar<Todos>([]);

const addTodo = createAddTodo(todosVar);

describe('addTodos hook', () => {
  beforeEach(() => todosVar([]));
  
  it('should add a todo', () => {
    addTodo('First todo')
    expect(
      todosVar()
    ).toHaveLength(1)

    expect(
      todosVar()[0].id
    ).toEqual(0)

    expect(
      todosVar()[0].completed
    ).toEqual(false)

    expect(
      todosVar()[0].text
    ).toEqual('First todo')
  })
})
