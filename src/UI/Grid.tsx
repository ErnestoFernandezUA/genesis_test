import { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

interface GridProps {
  children: ReactNode;
}

export const Grid: FunctionComponent<GridProps> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};
