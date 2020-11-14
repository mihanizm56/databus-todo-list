import { todosEndpoint } from '@/api/endpoints/todos';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { responseSchema } from './response-schema';

export const makeRequestConfig = () => ({
  endpoint: todosEndpoint,
  translateFunction: requestTranslateFunction,
  responseSchema,
});
