import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  padding-bottom: 3rem;
  max-width: 768px;
  margin-right: auto;

  &[data-rtp='true'] {
    padding: 0;
  }

  /* is single and max-width is 700 */

  > * {
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and (max-width: 1000px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  @media screen and (max-width: 700px) {
    > * {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

export default function Page({ children }: { children: React.ReactNode }) {
  return <StyledPage>{children}</StyledPage>;
}
