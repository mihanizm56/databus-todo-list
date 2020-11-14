import React, { memo, useEffect, useRef, useState } from 'react';
import classnames from 'classnames/bind';
import { Text } from '@wildberries/ui-kit';
import { TodoType } from '@/pages/home/_types';
import { ToggleInput } from './_components/toggle-input';
import { ResultButtons } from './_components/result-buttons';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-item';

type PropsType = {
  todoInitialValue: string;
  id: string;
  deleteTodo: (id: string) => void;
  updateTodo: ({
    input,
    callback,
  }: {
    input: TodoType;
    callback: () => void;
  }) => void;
};

export const TodoItem = memo(
  ({ todoInitialValue, id, deleteTodo, updateTodo }: PropsType) => {
    const inputRef = useRef(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [todoValue, setTodoValue] = useState(todoInitialValue);

    useEffect(() => {
      if (isUpdating) {
        inputRef.current.focus();
      }
    }, [isUpdating]);

    const handleChangeTodoValue = ({ value }) => {
      setTodoValue(value);
    };
    const handleSetValueIsUpdating = () => setIsUpdating(true);
    const handleSaveTodo = () => {
      updateTodo({
        input: { id, text: todoValue },
        callback: () => setIsUpdating(false),
      });
    };
    const handleDeleteTodoItem = () => deleteTodo(id);

    return (
      <div className={cn(BLOCK_NAME)}>
        <div className={cn(`${BLOCK_NAME}__title`)}>
          <Text color="black" size="h3" text="Задача" />
        </div>
        <div className={cn(`${BLOCK_NAME}__input-container`)}>
          <ToggleInput
            inputRef={inputRef}
            isUpdating={isUpdating}
            onChange={handleChangeTodoValue}
            setValueIsUpdating={handleSetValueIsUpdating}
            value={todoValue}
          />
        </div>
        <div className={cn(`${BLOCK_NAME}__buttons-container`)}>
          <ResultButtons
            deleteTodoItem={handleDeleteTodoItem}
            setValueIsUpdated={handleSaveTodo}
          />
        </div>
      </div>
    );
  },
);
