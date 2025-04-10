import { useContext } from 'react';
import { ITodoContext, TodoContext } from '@/entities/todo/context';
import { Checkbox } from '@chakra-ui/react';
import { Todo } from '@/entities/todo/Todo.entity';
import { todoActions } from '@/entities/todo/state';


interface IProps {
  todo: Todo
};

export function TodoItem({ todo }: IProps) {
  const { todosDispatch } = useContext(TodoContext) as ITodoContext;

  return (
    <Checkbox.Root
      width='full'
      checked={todo.completed}
      onCheckedChange={() => todosDispatch(todoActions.toggle(todo.id))}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label paddingInline={4}>{ todo.text }</Checkbox.Label>
    </Checkbox.Root>
  );
};