import { TodoType } from '@/pages/home/_types';
import { setTodosAction } from '../../actions';
import { todosSelector } from '../../selectors';
import { ActionToACType } from '../../_types';

export const updateTodoActionCreator = ({
  input: inputTodo,
  callback,
}: ActionToACType<TodoType>) => {
  try {
    const todos = todosSelector();

    const newTodos = todos.map(todo => {
      if (todo.id === inputTodo.id) {
        return { ...inputTodo };
      }

      return todo;
    });

    setTodosAction(newTodos);
  } catch (error) {
    console.error('error in updateTodoActionCreator', error);
  } finally {
    callback();
  }
};
