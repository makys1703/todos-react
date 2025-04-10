import { Button } from '@chakra-ui/react';
import { MouseEventHandler, PropsWithChildren } from 'react';


interface IProps extends PropsWithChildren {
  active?: boolean
  red?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
};

export function FilterButton({ children, active = false, red = false, onClick }: IProps) {
  const variant = active ? 'solid' : 'outline';
  const colorPalette = red ? 'red' : 'gray';

  return (
    <Button
      borderRadius={9}
      paddingInline={2}
      fontWeight={400}
      colorPalette={colorPalette}
      variant={variant}
      onClick={onClick}
    >
      { children }
    </Button>
  );
};