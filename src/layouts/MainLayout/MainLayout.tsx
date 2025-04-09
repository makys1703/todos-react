import { PropsWithChildren } from 'react';
import { Container, Flex, Center } from '@chakra-ui/react';


export function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Container height='vh' fluid>
        <Container
          backgroundColor='#391085'
          color='#fff'
          justifyContent='center'
          alignItems='center'
          paddingBlock={2}
          fluid
        >
          <Flex justifyContent='center' alignItems='center'>
            <h1>TODOS</h1>
          </Flex>
        </Container>
        <Center>
          <Container maxWidth='breakpoint-xl' paddingBlock={10} centerContent>
            { children }
          </Container>
        </Center>
      </Container>
    </>
  );
}