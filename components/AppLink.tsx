import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface IAppLinkProps {
  target: string;
  href: string;
  className: string;
  children: React.ReactNode;
  isCurrent: boolean;
}

export const StyledAppLink = styled.a`
  --thickness: 2px;
  --offset: 5px;
  --color: #6e8c56;
  --line: underline;

  text-decoration: var(--line) var(--color) var(--thickness);
  text-underline-offset: var(--offset);
  text-decoration-line: var(--line);
  text-decoration-color: var(--color);
  text-decoration-thickness: var(--thickness);

  &[data-current='true'] {
    text-decoration-color: var(--cta);
  }
`;

export function AppLink(props: IAppLinkProps) {
  const { target: t, href, className, children, isCurrent } = props;
  const target = t || (href.startsWith('http') ? '_blank' : undefined);

  return (
    <Link {...props} passHref>
      <StyledAppLink
        {...{
          target,
          className,
          rel: target === '_blank' ? 'noreferrer' : undefined,
          'data-current': isCurrent,
        }}
      >
        {children}
      </StyledAppLink>
    </Link>
  );
}
