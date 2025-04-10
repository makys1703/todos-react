import { useReducer, PropsWithChildren } from 'react';
import { TodoContext } from './todo.context';
import { initialState, todoReducer } from '../state';


export function TodoProvider({ children }: PropsWithChildren) {

  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext value={{
      todosState: todos,
      todosDispatch: dispatch
    }}>
      { children }
    </TodoContext>
  );
};