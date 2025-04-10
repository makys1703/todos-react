import { useContext, MouseEventHandler } from 'react';
import { ITodoContext, TodoContext } from '@/entities/todo/context';
import { todoActions, TodosFilter } from '@/entities/todo/state';
import { HStack } from '@chakra-ui/react';
import { FilterButton } from '../FilterButton';


export function Filters() {
  const { todosState, todosDispatch } = useContext(TodoContext) as ITodoContext;
  const { filter } = todosState;

  const setFilterToAll: MouseEventHandler<HTMLButtonElement> = () => {
    todosDispatch(todoActions.setFilter(TodosFilter.All));
  };

  const setFilterToActive: MouseEventHandler<HTMLButtonElement> = () => {
    todosDispatch(todoActions.setFilter(TodosFilter.Active));
  };

  const setFilterToCompleted: MouseEventHandler<HTMLButtonElement> = () => {
    todosDispatch(todoActions.setFilter(TodosFilter.Completed));
  };

  return (
    <HStack>
      <FilterButton onClick={setFilterToAll} active={filter === TodosFilter.All}>
        Все
      </FilterButton>
      <FilterButton onClick={setFilterToActive} active={filter === TodosFilter.Active}>
        Активные
      </FilterButton>
      <FilterButton onClick={setFilterToCompleted} active={filter === TodosFilter.Completed}>
        Выполненные
      </FilterButton>
    </HStack>
  );
};