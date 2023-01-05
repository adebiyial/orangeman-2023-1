import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.div`
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    /* margin-top: 2rem;
    margin-bottom: 2rem; */
    overflow: hidden;
  }

  th,
  td > strong {
    font-size: var(--font-size-3);
    line-height: var(--line-height-3);
    font-weight: 500;
    text-align: left;
    padding: 0 16px 8px;
  }

  td {
    padding: 12px 16px 16px;
    background-clip: padding-box;
    border-bottom: 1px solid var(--hr);
    border-right: 1px solid var(--hr);
  }

  tr:first-child td {
    border-top: 1px solid var(--hr);
  }

  tr td:first-child {
    border-left: 1px solid var(--hr);
  }

  tr td:last-child {
    border-right: 1px solid var(--hr);
  }

  tr:first-child td:first-child {
    border-top-left-radius: 3px;
  }
  tr:last-child td:first-child {
    border-bottom-left-radius: 3px;
  }
  tr:first-child td:last-child {
    border-top-right-radius: 3px;
  }
  tr:last-child td:last-child {
    border-bottom-right-radius: 3px;
  }
`;

export function Table({ children }: { children: React.ReactNode }) {
  return <StyledTable>{children}</StyledTable>;
}
