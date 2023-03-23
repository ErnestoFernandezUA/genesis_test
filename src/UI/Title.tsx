import { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

interface TitleProps {
  children: ReactNode;
}

export const Title: FunctionComponent<TitleProps> = ({ children }) => {
  return (
    <Wrapper>
      <h2>{children}</h2>
    </Wrapper>
  );
};
