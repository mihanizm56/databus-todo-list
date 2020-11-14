import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig } from './make-request-config';

export const createTodoRequest = (text: string): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(text));
