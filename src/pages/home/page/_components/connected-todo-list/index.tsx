import React, { Component } from 'react';
import { subscriber } from '@ravilm/databus-react';
import {
  todosFormIsOpenedSubscriberSelector,
  todosFormLoadingSubscriberSelector,
  todosLoadingSubscriberSelector,
  todosSubscriberSelector,
  TODOS_DATA,
  TODOS_DATA_LOADING,
  TODOS_FORM_LOADING,
  TODOS_FORM_OPENED,
  deleteTodoActionCreator,
  createTodoActionCreator,
} from '@/pages/home/_databus/todo-module';
import { TodoType } from '@/pages/home/_types';
import { updateTodoActionCreator } from '@/pages/home/_databus/todo-module/action-creators/update-todo';
import { TodoListView } from './_components/todo-list-view';

type PropsType = {
  todos: Array<TodoType>;
  listLoading: boolean;
  formLoading: boolean;
  isTodoFormOpened: boolean;
};

type StateType = {
  isModalopened: boolean;
};

// eslint-disable-next-line
class WrappedContainer extends Component<PropsType,StateType> {
  state = { isModalopened: false };

  deleteTodo = (id: string) => deleteTodoActionCreator(id);

  createTodo = ({ text }: Pick<TodoType, 'text'>) =>
    createTodoActionCreator({
      input: text,
      callback: this.closeTodoForm,
    });

  updateTodo = (options: { input: TodoType; callback: () => void }) =>
    updateTodoActionCreator(options);

  openTodoForm = () => this.setState({ isModalopened: true });

  closeTodoForm = () => this.setState({ isModalopened: false });

  render() {
    return (
      <TodoListView
        addModalOpened={this.state.isModalopened}
        closeModal={this.closeTodoForm} // eslint-disable-line
        deleteTodo={this.deleteTodo} // eslint-disable-line
        formLoading={this.props.formLoading}
        listLoading={this.props.listLoading}
        openModal={this.openTodoForm}
        submitForm={this.createTodo} // eslint-disable-line
        todosList={this.props.todos} // eslint-disable-line
        updateTodo={this.updateTodo} // eslint-disable-line
      />
    );
  }
}

export const ConnectedTodoList = subscriber<any, any>({
  getStateToProps: {
    [TODOS_DATA]: {
      todos: todosSubscriberSelector,
    },
    [TODOS_DATA_LOADING]: { listLoading: todosLoadingSubscriberSelector },
    [TODOS_FORM_LOADING]: {
      formLoading: todosFormLoadingSubscriberSelector,
    },
    [TODOS_FORM_OPENED]: {
      isTodoFormOpened: todosFormIsOpenedSubscriberSelector,
    },
  },
})(WrappedContainer);
