import { deleteTodoRequest } from '@/api/requests/todos/delete-todo';
import { setTodosAction } from '../../actions';

export const deleteTodoActionCreator = async (id: string) => {
  try {
    const { data, error, errorText } = await deleteTodoRequest(id);

    if (error) {
      throw new Error(errorText);
    }

    setTodosAction(data.todos);
  } catch (error) {
    console.error('error in deleteTodoActionCreator', error.message);
  }
};
