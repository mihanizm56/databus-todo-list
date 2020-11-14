import { createTodoRequest } from '@/api/requests/todos/create-todo';
import {
  setTodosAction,
  setTodosFormLoadingStartAction,
  setTodosFormLoadingStopAction,
} from '../../actions';
import { ActionToACType } from '../../_types';

export const createTodoActionCreator = async ({
  input,
  callback,
}: ActionToACType<string>) => {
  try {
    setTodosFormLoadingStartAction();

    const { data, error, errorText } = await createTodoRequest(input);

    if (error) {
      throw new Error(errorText);
    }

    setTodosAction(data.todos);
  } catch (error) {
    console.error('error in createTodoActionCreator', error.message);
  } finally {
    setTodosFormLoadingStopAction();

    callback();
  }
};
