import React, { memo, RefObject } from 'react';
import classnames from 'classnames/bind';
import {
  ButtonLink,
  NavigationEditIcon,
  SimpleInput,
  SimpleInputChangeEventType,
  Text,
} from '@wildberries/ui-kit';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Toggle-input';

type PropsType = {
  isUpdating: boolean;
  onChange: (event: SimpleInputChangeEventType) => void;
  value: string;
  setValueIsUpdating: () => void;
  inputRef: RefObject<HTMLInputElement>;
};

export const ToggleInput = memo(
  ({
    isUpdating,
    onChange,
    value,
    setValueIsUpdating,
    inputRef,
  }: PropsType) => (
    <div className={cn(BLOCK_NAME)}>
      <div
        className={cn(`${BLOCK_NAME}__input-container`, {
          [`${BLOCK_NAME}__input-container--hidden`]: !isUpdating,
        })}
      >
        <SimpleInput
          id="toggle-input__"
          inputRef={inputRef}
          name="todo-value"
          onChange={onChange}
          value={value}
        />
      </div>
      <div
        className={cn(`${BLOCK_NAME}__input-container`, {
          [`${BLOCK_NAME}__input-container--hidden`]: isUpdating,
        })}
      >
        <Text color="black" size="h4" text={value} />
      </div>
      <div className={cn(`${BLOCK_NAME}__button-container`)}>
        <ButtonLink onClick={setValueIsUpdating} variant="interface">
          {() => <NavigationEditIcon colorType="richGreyColor" size="S" />}
        </ButtonLink>
      </div>
    </div>
  ),
);
