import { TodoType } from '../../../_types';

export const todosSubscriberSelector = (
  todos: Array<TodoType>,
): Array<TodoType> => todos || [];

export const todosLoadingSubscriberSelector = (loadingState): boolean =>
  loadingState && loadingState.value ? loadingState.value : false;

export const todosFormLoadingSubscriberSelector = (loadingState): boolean =>
  loadingState && loadingState.value ? loadingState.value : false;

export const todosFormIsOpenedSubscriberSelector = (openedState): boolean =>
  openedState && openedState.value ? openedState.value : false;
