import { useContext, MouseEventHandler } from 'react';
import { Flex } from '@chakra-ui/react';
import { Filters } from './components';
import { FilterButton } from './components';
import { TodoContext, ITodoContext } from '@/entities/todo/context';
import { todoActions } from '@/entities/todo/state';


interface IProps {
  activeTodosCount: number
};

export function TodosBar({ activeTodosCount }: IProps) {
  const { todosDispatch } = useContext(TodoContext) as ITodoContext;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (): void => {
    todosDispatch(todoActions.removeCompleted());
  };

  return (
    <Flex
      gap={10}
      paddingBlock={4}
      fontSize={14}
      maxWidth='breakpoint-md' 
      justifyContent='space-between'
      alignItems='center'
      borderTop='1px solid #ccc'
    >
      <FilterButton onClick={handleClick} red>Удалить выполненные</FilterButton>
      <Filters />
      <span>Осталось дел: { activeTodosCount }</span>
    </Flex>
  );
};