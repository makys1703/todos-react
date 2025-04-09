import { Button } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';


interface IProps extends PropsWithChildren {
  active?: boolean,
  red?: boolean
};

export function FilterButton({ children, active = false, red = false }: IProps) {
  const variant = active ? 'solid' : 'outline';
  const colorPalette = red ? 'red' : 'gray';

  return (
    <Button
      borderRadius={9}
      paddingInline={2}
      fontWeight={400}
      colorPalette={colorPalette}
      variant={variant}
    >
      { children }
    </Button>
  );
};