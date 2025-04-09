import { Checkbox, useCheckbox } from '@chakra-ui/react';


export function TodoItem() {
  const checkbox = useCheckbox();

  return (
    <Checkbox.RootProvider value={checkbox} width='full'>
      <Checkbox.Root variant='outline' colorPalette='orange'>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label paddingInline={2} fontSize={18} fontWeight={400}>Todo Item</Checkbox.Label>
      </Checkbox.Root>
    </Checkbox.RootProvider>
  );
};