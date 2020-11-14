import { getTodosRequest } from '@/api/requests/todos/get-todos';
import {
  setTodosAction,
  setTodosLoadingStartAction,
  setTodosLoadingStopAction,
} from '../../actions';

export const getTodosActionCreator = async () => {
  try {
    setTodosLoadingStartAction();

    const { data, error, errorText } = await getTodosRequest();

    if (error) {
      throw new Error(errorText);
    }

    setTodosAction(data.todos);
  } catch (error) {
    console.error('error in getTodosActionCreator', error.message);
  } finally {
    setTodosLoadingStopAction();
  }
};
