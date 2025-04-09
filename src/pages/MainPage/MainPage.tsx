import { Flex, VStack } from'@chakra-ui/react';
import { MainLayout } from '@/layouts';
import { TodosBar } from '@/modules';
import { AddTodoForm, TodoItem } from '@/components';


export function MainPage() {
  return (
    <MainLayout>
      <Flex gap={8} direction='column' justifyContent='center' alignItems='center'>
        <AddTodoForm />
        <VStack width='full' gap={4}>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </VStack>
        <TodosBar />
      </Flex>
    </MainLayout>
  );
};