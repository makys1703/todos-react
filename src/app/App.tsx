import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { TodoProvider } from '@/entities/todo/context';
import { MainPage } from '@/pages';
import './styles/globals.css';


export function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <TodoProvider>
        <MainPage />
      </TodoProvider>
    </ChakraProvider>
  );
}