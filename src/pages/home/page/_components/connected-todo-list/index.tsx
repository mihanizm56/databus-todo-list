import React, { Component } from 'react';
import { TodoListView } from './_components/todo-list-view';

// eslint-disable-next-line
class wrappedContainer extends Component {
  render() {
    return (
      <TodoListView
        addModalOpened={false}
        closeModal={() => console.log('closeModal')} // eslint-disable-line
        deleteTodo={values => console.log('deleteTodo', values)} // eslint-disable-line
        itemsList={[]}
        listLoading={false}
        modalLoading={false}
        openModal={() => console.log('openModal')} // eslint-disable-line
        submitForm={values => console.log('submitForm', values)} // eslint-disable-line
        updateTodo={values => console.log('updateTodo', values)} // eslint-disable-line
      />
    );
  }
}

export const ConnectedTodoList = wrappedContainer;
