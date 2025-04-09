import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { MainPage } from '@/pages';
import './styles/globals.css';


export function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <MainPage />
    </ChakraProvider>
  );
}