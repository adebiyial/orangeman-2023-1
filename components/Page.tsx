import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  padding: 6rem 0;
  max-width: 768px;
  margin-right: auto;

  > * {
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and (max-width: 1000px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    @media screen and (max-width: 700px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

export default function Page({ children }: { children: React.ReactNode }) {
  return <StyledPage>{children}</StyledPage>;
}
