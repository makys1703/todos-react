import { Button, HStack, Input } from '@chakra-ui/react';


export function AddTodoForm() {
  return (
    <HStack width='full' gap={4}>
      <Input paddingInline={4} placeholder='Дело' variant='outline' />
      <Button borderRadius={9} paddingInline={4} colorPalette='gray' variant='solid'>Добавить</Button>
    </HStack>
  );
};