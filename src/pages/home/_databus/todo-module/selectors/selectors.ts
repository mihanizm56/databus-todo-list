import { Databus } from '@ravilm/databus';
import { TodoType } from '../../../_types';
import { TODOS_DATA } from '../_constants';

export const todosSelector = (): Array<TodoType> =>
  Databus.getData({ name: TODOS_DATA })
    ? Databus.getData({ name: TODOS_DATA })
    : [];
