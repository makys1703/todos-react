import { Button, HStack, Field, Input } from '@chakra-ui/react';
import { useContext, useReducer, ChangeEventHandler, FormEventHandler } from 'react';
import { formReducer, formActions, initialState } from './state';
import { TodoContext, ITodoContext } from '@/entities/todo/context';
import { todoActions } from '@/entities/todo/state';
import { Todo } from '@/entities/todo/Todo.entity';
import { formError } from './state/AddTodoForm.enums';
import styles from './AddTodoForm.module.css';


export function AddTodoForm() {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const { todosDispatch } = useContext(TodoContext) as ITodoContext;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => 
    dispatch(formActions.change(event.target.value));

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (formState.error) {
      dispatch(formActions.setError(formError.UnknownError));
      return;
    }

    if (!formState.touched) {
      dispatch(formActions.setError(formError.EmptyData));
      return;
    }

    const todo = new Todo();
    todo.id = String(Math.trunc(1000 * Math.random()));
    todo.text = formState.value;
    todo.completed = false;

    dispatch(formActions.reset());
    todosDispatch(todoActions.add(todo));
  };

  return (
    <form className={styles['form']} onSubmit={handleSubmit}>
      <HStack width='full' gap={4} alignItems='start'>
        <Field.Root invalid={Boolean(formState.error)}>
          <Input 
            paddingInline={4} 
            placeholder='Дело'
            variant='outline'
            value={formState.value}
            onChange={handleChange}
          />
          <Field.ErrorText>{ formState.error }</Field.ErrorText>
        </Field.Root>
        <Button 
          borderRadius={9}
          paddingInline={4}
          colorPalette='gray'
          variant='solid'
          type='submit'
          disabled={Boolean(formState.error)}
        >
        Добавить
        </Button>
      </HStack>
    </form>
  );
};