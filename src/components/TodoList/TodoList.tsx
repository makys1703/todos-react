import { VStack } from '@chakra-ui/react';
import { TodoItem } from '../TodoItem';
import { Todo } from '@/entities/todo/Todo.entity';
import { TodosFilter } from '@/entities/todo/state';


interface IProps {
  todos: Todo[]
  filter: TodosFilter
};

const emptyListTextMap = {
  [TodosFilter.All]: 'Список дел пуст',
  [TodosFilter.Active]: 'Список активных дел пуст',
  [TodosFilter.Completed]: 'Список выполненных дел пуст'
};

export function TodoList({ todos, filter }: IProps) {
  return (
    <VStack width='full' gap={4}>
      { todos.length === 0 && <p>{ emptyListTextMap[filter] }</p> }
      { todos.length > 0 && todos.map(
        (todo) => <TodoItem todo={todo} key={todo.id} />)
      }
    </VStack>
  );
};