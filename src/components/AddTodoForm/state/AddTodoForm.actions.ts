import { formActionType, formError } from './AddTodoForm.enums';


interface IChangeAction {
  type: formActionType.Change
  payload: string
};

interface IResetAction {
  type: formActionType.Reset
};

interface ISetErrorAction {
  type: formActionType.SetError
  payload: formError
};

export type IFormAction = IChangeAction | IResetAction | ISetErrorAction;

const change = (value: string): IChangeAction => ({
  type: formActionType.Change,
  payload: value
});

const reset = (): IResetAction => ({
  type: formActionType.Reset
});

const setError = (error: formError): ISetErrorAction => ({
  type: formActionType.SetError,
  payload: error
});

export const formActions = {
  change,
  reset,
  setError
};

