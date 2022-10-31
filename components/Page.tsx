import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  padding: 6rem 2rem;
  max-width: 768px;
  margin-right: auto;
`;

export default function Page({ children }: { children: React.ReactNode }) {
  return <StyledPage>{children}</StyledPage>;
}
