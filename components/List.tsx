import { ReactNode } from 'react';
import styled from 'styled-components';
import { StyledAppLink } from './AppLink';
import { StyledCustomPre } from './Fence';

export const StyledList = styled.ol`
  counter-reset: listCounter;
  list-style: none;
  display: grid;
  row-gap: 0.5rem;

  li {
    position: relative;

    > ol {
      margin-top: 0.5rem;
    }
  }

  &[data-ordered='false'] {
    padding-left: 20px;
    li {
      :before {
        content: '';
        border-radius: 50%;
        background-color: orange;
        position: absolute;
        transform: translate(-15px, -50%);

        top: 50%;
        left: 0;
        width: 7px;
        height: 7px;
      }
    }
  }
  &[data-ordered='true'] {
    li {
      counter-increment: listCounter;

      :before {
        content: counter(listCounter, decimal-leading-zero);
        content: counter(listCounter, decimal-leading-zero) '.';
        position: absolute;
        top: 0;
        transform: translateX(-35px);
        z-index: 1;
      }

      :last-of-type ${StyledAppLink}::after {
        content: none;
      }
    }
  }

  ${StyledCustomPre} {
    margin: 0.5em 0 0.5em 0;

    @media screen and (max-width: 700px) {
      .code-block__inner {
        border-top-left-radius: 4px;
        border: 1px solid #363636;
      }
    }
  }

  @media screen and (max-width: 700px) {
    padding-left: 3rem;
  }
`;

interface IListProps {
  ordered: boolean;
  id: string;
  className: string;
  children: ReactNode;
}

export function List({ ordered, id, className, children }: IListProps) {
  return (
    <StyledList
      {...{ as: ordered ? 'ol' : 'ul', id, className, 'data-ordered': ordered }}
    >
      {children}
    </StyledList>
  );
}
