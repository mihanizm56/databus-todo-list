import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { ButtonLink, Modal, Preloader, Text } from '@wildberries/ui-kit';
import { AddTodoFormValues, TodoType } from '@/pages/home/_types';
import { TodoList } from './_components/todo-list';
import { AddTodoForm } from './_components/add-todo-form';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const BLOCK_NAME = 'Todo-list-view';

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
  addModalOpened: boolean;
  closeModal: () => void;
  openModal: () => void;
  submitForm: (values: AddTodoFormValues) => void;
  error?: any;
  listLoading: boolean;
  formLoading: boolean;
};

export const TodoListView = memo(
  ({
    todosList,
    deleteTodo,
    updateTodo,
    addModalOpened,
    closeModal,
    openModal,
    submitForm,
    error,
    listLoading,
    formLoading,
  }: PropsType) => {
    if (Boolean(error)) {
      return (
        <div className={cn(BLOCK_NAME)}>
          <Text color="black" size="h2" text={`Ошибка: ${error.message}`} />
        </div>
      );
    }

    if (listLoading) {
      return (
        <div className={cn(BLOCK_NAME)}>
          <Preloader color="dark-purple" size="large" />
        </div>
      );
    }

    return (
      <>
        <div className={cn(BLOCK_NAME)}>
          <div className={cn(`${BLOCK_NAME}__button`)}>
            <ButtonLink
              onClick={openModal}
              text="Добавить задачу"
              variant="main"
            />
          </div>
          <div className={cn(`${BLOCK_NAME}__list`)}>
            <TodoList
              deleteTodo={deleteTodo}
              todosList={todosList}
              updateTodo={updateTodo}
            />
          </div>
        </div>

        <Modal
          isOpened={addModalOpened}
          isShowCloseIcon
          onClose={closeModal}
          title="Добавление задачи"
        >
          <AddTodoForm
            closeModal={closeModal}
            isLoading={formLoading}
            submitForm={submitForm}
          />
        </Modal>
      </>
    );
  },
);
