import { ReactNode } from 'react';
import styled from 'styled-components';
import { StyledAppLink } from './AppLink';

const StyledList = styled.ol`
  counter-reset: listCounter;
  list-style: none;
  display: grid;
  row-gap: 1rem;

  li {
    position: relative;
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
        top: 50%;
        transform: translate(-35px, -50%);
        font-weight: bold;
        z-index: 1;
      }

      :last-of-type ${StyledAppLink}::after {
        content: none;
      }
    }
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
      as={ordered ? 'ol' : 'ul'}
      {...{ id, className, 'data-ordered': ordered }}
    >
      {children}
    </StyledList>
  );
}
