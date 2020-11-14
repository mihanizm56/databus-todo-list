import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import { Page } from './page';

const pageNode = 'home';

const action = async () => {
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
