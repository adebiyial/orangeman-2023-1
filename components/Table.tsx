import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.div`
  overflow-y: auto;
  --cellPadding: 0.75rem 0.45rem;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    background: var(--body-bg, #1f1f20);
  }

  th,
  td {
    text-align: left;
    padding: var(--cellPadding);
    border: 1px solid var(--hr);
  }

  th,
  td:not(.title) {
    white-space: nowrap;
  }

  td.title {
    font-weight: 500;
  }

  @media screen and (max-width: 600px) {
    th,
    td {
      white-space: nowrap;
    }
  }
`;

export function Table({ children }: { children: React.ReactNode }) {
  return <StyledTable>{children}</StyledTable>;
}
