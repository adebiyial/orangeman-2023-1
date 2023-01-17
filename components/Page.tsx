import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  padding-bottom: 3rem;
  max-width: var(--page-max-width);
  margin-right: auto;
  background-color: var(--bg-color);
  height: 100vh;
  overflow: auto;
  &[data-rtp='true'] {
    padding: 0;
  }

  /* is single and max-width is 700 */

  > * {
    padding-left: 2rem;
    padding-right: 2rem;

    @media screen and (max-width: 1000px) {
    }
  }

  @media screen and (max-width: 700px) {
    > * {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    &[data-rtp='true'] {
      article {
        padding: 0;
      }
    }
  }
`;

export default function Page({
  removeTopPadding,
  children,
}: {
  removeTopPadding: boolean;
  children: React.ReactNode;
}) {
  return <StyledPage data-rtp={removeTopPadding}>{children}</StyledPage>;
}
