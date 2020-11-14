import 'fast-text-encoding/text';
/* 
    if you need some polyfills and you are not in "rus" or "euro" version
    please insert below (package is included)
    import 'react-app-polyfill/stable';
*/

import 'reset-css';
import React from 'react';
import ReactDOM from 'react-dom';
import { configureRouter } from '@wildberries/service-router';
import { ABORT_REQUEST_EVENT_NAME } from '@mihanizm56/fetch-api';
import { geti18Next, getLocale } from '@wildberries/i18next-utils';
import { routes } from '@/pages/routes';
import { App } from '@/_components/app';
import { appNamespace } from './_constants/i18next/app-namespace';
import 'normalize.css';
import '@/styles/global.css';
import '@/styles/variables.module.scss';

const ROOT_ELEMENT = document.getElementById('root');
const initialLocale = getLocale();

const router = configureRouter({
  defaultRoute: 'home',
  eventNameToCancelRequests: ABORT_REQUEST_EVENT_NAME,
});

router.setDependencies({
  routes,
});

router.add(routes);

geti18Next({ appNamespace, locale: initialLocale }).then(() =>
  router.start(() => {
    ReactDOM.render(<App router={router} />, ROOT_ELEMENT);
  }),
);
