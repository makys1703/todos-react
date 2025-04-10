import { IFormAction } from './AddTodoForm.actions';
import { formError, formActionType } from './AddTodoForm.enums';


interface IFormState {
  value: string
  touched: boolean
  error?: formError
};

export const initialState: IFormState = {
  value: '',
  touched: false
};

const getErrorByValue = (value: string): formError | undefined => {
  if (value.trim().length < 3) return formError.MinLength;
};

export function formReducer(state: IFormState = initialState, action: IFormAction): IFormState {

  if (action.type === formActionType.Change) {
    return {
      value: action.payload,
      touched: true,
      error: getErrorByValue(action.payload)
    };
  }

  if (action.type === formActionType.Reset) {
    return initialState;
  }

  if (action.type === formActionType.SetError) {
    return {
      ...state,
      error: action.payload
    };
  }

  return state;

}

