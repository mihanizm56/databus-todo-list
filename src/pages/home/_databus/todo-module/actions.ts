import { Databus } from '@ravilm/databus';
import { TodoType } from '../../_types';
import {
  TODOS_DATA,
  TODOS_DATA_LOADING,
  TODOS_FORM_LOADING,
} from './_constants';

export const setTodosAction = (todos: Array<TodoType>) => {
  new Databus({ name: TODOS_DATA }).addEvent({
    detail: todos,
  });

  Databus.setData({
    values: {
      [TODOS_DATA]: todos,
    },
  });
};

export const setTodosLoadingStartAction = () => {
  new Databus({ name: TODOS_DATA_LOADING }).addEvent({
    detail: { value: true },
  });

  Databus.setData({
    values: {
      [TODOS_DATA_LOADING]: { value: true },
    },
  });
};

export const setTodosLoadingStopAction = () => {
  new Databus({ name: TODOS_DATA_LOADING }).addEvent({
    detail: { value: false },
  });

  Databus.setData({
    values: {
      [TODOS_DATA_LOADING]: { value: false },
    },
  });
};

export const setTodosFormLoadingStartAction = () => {
  new Databus({ name: TODOS_FORM_LOADING }).addEvent({
    detail: { value: true },
  });

  Databus.setData({
    values: {
      [TODOS_FORM_LOADING]: { value: true },
    },
  });
};

export const setTodosFormLoadingStopAction = () => {
  new Databus({ name: TODOS_FORM_LOADING }).addEvent({
    detail: { value: false },
  });

  Databus.setData({
    values: {
      [TODOS_FORM_LOADING]: { value: false },
    },
  });
};
