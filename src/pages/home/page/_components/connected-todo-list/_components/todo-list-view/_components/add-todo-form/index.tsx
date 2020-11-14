import React from 'react';
import { Field, Form } from 'react-final-form';
import { ButtonLink, FormSimpleInput } from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import { AddTodoFormValues } from '@/pages/home/_types';
import styles from './index.module.scss';

type PropsType = {
  submitForm: (values: AddTodoFormValues) => void;
  isLoading: boolean;
  closeModal: () => void;
};

const cn = classnames.bind(styles);
const BLOCK_NAME = 'Add-todo-form';

export const AddTodoForm = ({
  submitForm,
  isLoading,
  closeModal,
}: PropsType) => (
  <Form
    onSubmit={submitForm}
    render={({ handleSubmit, pristine }) => (
      <form className={cn(BLOCK_NAME)} onSubmit={handleSubmit}>
        <div className={cn(`${BLOCK_NAME}__field-container`)}>
          <Field
            autoComplete="on"
            component={FormSimpleInput}
            label="Текст задачи"
            name="text"
            placeholder=""
            readOnly={isLoading}
            required
          />
        </div>
        <div className={cn(`${BLOCK_NAME}__buttons-container`)}>
          <ButtonLink
            disabled={isLoading || pristine}
            isLoading={isLoading}
            text="Добавить"
            type="submit"
            withLoader
          />
          <ButtonLink
            disabled={isLoading}
            onClick={closeModal}
            text="Отменить"
            variant="interface"
          />
        </div>
      </form>
    )}
  />
);
