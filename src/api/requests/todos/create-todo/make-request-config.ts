import { todosEndpoint } from '@/api/endpoints/todos';
import { TodoType } from '@/pages/home/_types';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (todo: Pick<TodoType, 'text'>) => ({
  endpoint: todosEndpoint,
  translateFunction: requestTranslateFunction,
  responseSchema,
  body: { todo },
});
