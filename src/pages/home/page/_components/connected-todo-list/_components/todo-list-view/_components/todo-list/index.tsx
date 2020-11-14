import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { TodoType } from '@/pages/home/_types';
import { TodoItem } from './_components/todo-item';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const BLOCK_NAME = 'Todo-list';

type PropsType = {
  todosList: Array<TodoType>;
  deleteTodo: (id: string) => void;
  updateTodo: ({
    input,
    callback,
  }: {
    input: TodoType;
    callback: () => void;
  }) => void;
};

export const TodoList = memo(
  ({ todosList, deleteTodo, updateTodo }: PropsType) => (
    <ul className={cn(BLOCK_NAME)}>
      {todosList.map(({ id, text }) => (
        <li key={id} className={cn(`${BLOCK_NAME}__item`)}>
          <TodoItem
            deleteTodo={deleteTodo}
            id={id}
            todoInitialValue={text}
            updateTodo={updateTodo}
          />
        </li>
      ))}
    </ul>
  ),
);
