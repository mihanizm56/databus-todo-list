import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { ButtonLink } from '@wildberries/ui-kit';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Result-buttons';

type PropsType = {
  setValueIsUpdated: () => void;
  deleteTodoItem: () => void;
};

export const ResultButtons = memo(
  ({ setValueIsUpdated, deleteTodoItem }: PropsType) => (
    <div className={cn(BLOCK_NAME)}>
      <div className={cn(`${BLOCK_NAME}__button`)}>
        <ButtonLink
          onClick={setValueIsUpdated}
          size="small"
          text="Сохранить"
          variant="main"
        />
      </div>
      <div className={cn(`${BLOCK_NAME}__button`)}>
        <ButtonLink
          onClick={deleteTodoItem}
          size="small"
          text="Удалить"
          variant="interface"
        />
      </div>
    </div>
  ),
);
