import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import { Page } from './page';
import { getTodosActionCreator } from './_databus/todo-module/action-creators/get-todos';

const pageNode = 'home';

const action = async () => {
  await getTodosActionCreator();

  return {
    title: 'Home',
    content: (
      <RouteNode nodeName={pageNode}>
        {({ route, content }) => {
          if (route.name === pageNode) {
            return <Page />;
          }

          return content;
        }}
      </RouteNode>
    ),
  };
};

export default action;
