
import { useTodos } from "./useTodos";
import { todosVar, visibilityFilterVar } from "../cache";
import { VisibilityFilters } from "../models/VisibilityFilter";

const { operations } = useTodos(todosVar, visibilityFilterVar);

describe('useTodos', () => {
  beforeEach(() => {
    todosVar([]);
    visibilityFilterVar(VisibilityFilters.SHOW_ALL)
  });
  
  it('should add a todo', () => {
    operations.addTodo('First todo')
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

  // ...
})
