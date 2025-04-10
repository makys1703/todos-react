import { Todo } from '../Todo.entity';
import { todoActionType, TodosFilter } from './todo.enums';
import { ITodoAction } from './todo.actions';


export interface ITodoState {
  filter: TodosFilter
  data: Todo[]
};

export const initialState: ITodoState = {
  filter: TodosFilter.All,
  data: []
};

export function todoReducer(state: ITodoState = initialState, action: ITodoAction): ITodoState {

  if (action.type === todoActionType.Add) {
    return {
      ...state,
      data: [...state.data, action.payload]
    };
  }

  if (action.type === todoActionType.Toggle) {
    const data: Todo[] = state.data.map((todo) => {
      if (todo.id !== action.payload) {
        return todo;
      }
      return {
        ...todo,
        completed: !todo.completed
      };
    });

    return {
      ...state,
      data 
    };
  }

  if (action.type === todoActionType.RemoveCompleted) {
    return {
      ...state,
      data: state.data.filter((todo) => todo.completed === false)
    };
  }

  if (action.type === todoActionType.SetFilter) {
    return {
      ...state,
      filter: action.payload
    };
  }

  return state;
}