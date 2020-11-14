export type ActionToACType<InputType> = {
  input: InputType;
  callback: () => void;
};
