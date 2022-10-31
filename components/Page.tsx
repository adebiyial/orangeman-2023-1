import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  padding: 6rem 2rem;
  max-width: 768px;
  margin-right: auto;

  @media screen and (max-width: 1000px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default function Page({ children }: { children: React.ReactNode }) {
  return <StyledPage>{children}</StyledPage>;
}
