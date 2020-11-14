import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { ConnectedTodoList } from './_components/connected-todo-list';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

export const Page = memo(() => (
  <div className={cn('homePage')}>
    <ConnectedTodoList />
  </div>
));
