import React from 'react';
import styled from 'styled-components';
import { StyledList } from './List';

export const StyledToc = styled.div`
  @media screen and (max-width: 1050px) {
    display: none;
  }

  position: absolute;
  left: 0;
  width: calc(var(--page-max-width) / var(--div));
  height: 100vh;
  transform: translateX(100%);
  background-color: var(--bg-color);
  border-left: 5px solid #1f1f20;
  display: grid;
  place-content: center;
  animation-name: slideIn;
  animation-duration: 200ms;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 0;
  z-index: -1;

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(var(--page-max-width));
      z-index: 1;
    }
  }

  .toc-wrap {
    padding: 1rem calc(1rem + 5px) 1rem 1rem;
    display: inherit;
    row-gap: 10px;
    position: relative;

    ::before {
      content: 'Table of content';
      font-size: 16px;
      text-transform: uppercase;
      font-weight: bold;
      width: fit-content;
      font-style: italic;
    }

    ${StyledList} {
      padding-left: 0;

      &[data-ordered='true'] {
        li {
          :before {
            content: none;
          }

          > ol {
            padding-left: 1rem;
            box-shadow: inset 2px 0px 0px 0px var(--hr);
          }
        }
      }
    }
  }
`;

// TODO: traverse children to gen toc, don't hardcode it.
export function Toc({ children }: { children: React.ReactNode }) {
  return (
    <StyledToc>
      <div className="toc-wrap">{children}</div>
    </StyledToc>
  );
}
