import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig } from './make-request-config';

export const createTodoRequest = (): Promise<IResponse> =>
  new RestRequest().deleteRequest(makeRequestConfig());
