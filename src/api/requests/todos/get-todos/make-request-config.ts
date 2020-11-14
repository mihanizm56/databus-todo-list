import { IRequestParams } from '@mihanizm56/fetch-api';
import { todosEndpoint } from '@/api/endpoints/todos';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (): IRequestParams => ({
  endpoint: todosEndpoint,
  translateFunction: requestTranslateFunction,
  responseSchema,
  isErrorTextStraightToOutput: true,
});
