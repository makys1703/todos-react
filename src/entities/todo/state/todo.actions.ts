import { Todo } from '../Todo.entity';
import { todoActionType, TodosFilter } from './todo.enums';


interface IAddAction {
  type: todoActionType.Add
  payload: Todo
};

interface IToggleAction {
  type: todoActionType.Toggle
  payload: string
};

interface IRemoveCompletedAction {
  type: todoActionType.RemoveCompleted
};

interface ISetFilterAction {
  type: todoActionType.SetFilter
  payload: TodosFilter
};

export type ITodoAction = IAddAction | IToggleAction | IRemoveCompletedAction | ISetFilterAction;

const add = (todo: Todo): ITodoAction => ({
  type: todoActionType.Add,
  payload: todo
});

const toggle = (id: string): ITodoAction => ({
  type: todoActionType.Toggle,
  payload: id
});

const removeCompleted = (): ITodoAction => ({
  type: todoActionType.RemoveCompleted
});

const setFilter = (filter: TodosFilter): ISetFilterAction => ({
  type: todoActionType.SetFilter,
  payload: filter
});

export const todoActions = {
  add,
  toggle,
  removeCompleted,
  setFilter
};