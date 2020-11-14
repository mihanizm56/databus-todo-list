import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { TodoType } from '@/pages/home/_types';
import { makeRequestConfig } from './make-request-config';

export const createTodoRequest = (todo: TodoType): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(todo));
