import { useContext, useMemo } from 'react';
import { TodosFilter } from '@/entities/todo/state';
import { ITodoContext, TodoContext } from '@/entities/todo/context';
import { Flex } from'@chakra-ui/react';
import { MainLayout } from '@/layouts';
import { TodosBar } from '@/modules';
import { AddTodoForm, TodoList } from '@/components';


export function MainPage() {
  const { todosState } = useContext(TodoContext) as ITodoContext;
  const { data: todos, filter: todosFilter } = todosState;

  const filteredTodosByActive = useMemo(() => todos.filter((todo) => !todo.completed), [todos]);
  const filteredTodosByCompleted = useMemo(() => todos.filter((todo) => todo.completed), [todos]);

  const filteredTodos = todosFilter === TodosFilter.All
    ? todos
    : todosFilter === TodosFilter.Active ? filteredTodosByActive : filteredTodosByCompleted;

  return (
    <MainLayout>
      <Flex gap={8} direction='column' justifyContent='center' alignItems='center'>
        <AddTodoForm />
        <TodoList todos={filteredTodos} filter={todosFilter} />
        <TodosBar activeTodosCount={filteredTodosByActive.length} />
      </Flex>
    </MainLayout>
  );
};