import { createContext, ActionDispatch } from 'react';
import { ITodoAction, ITodoState } from '../state';


export interface ITodoContext {
  todosState: ITodoState;
  todosDispatch: ActionDispatch<[action: ITodoAction]>;
};

export const TodoContext = createContext<ITodoContext | null>(null);