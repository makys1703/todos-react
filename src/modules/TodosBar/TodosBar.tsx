import { Flex, HStack } from '@chakra-ui/react';
import { FilterButton } from './components';


const Filters = () => {
  return (
    <HStack>
      <FilterButton active>Все</FilterButton>
      <FilterButton>Активные</FilterButton>
      <FilterButton>Выполненные</FilterButton>
    </HStack>
  );
};

export function TodosBar() {
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
      <FilterButton red>Удалить выполненные</FilterButton>
      <Filters />
      <span>Осталось дел: 3</span>
    </Flex>
  );
};