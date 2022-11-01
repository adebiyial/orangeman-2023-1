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

const StyledAppLink = styled.a`
  text-decoration: underline #59b3d6 3px;
  text-underline-offset: 5px;
  text-decoration-line: underline;
  text-decoration-color: #59b3d6;
  text-decoration-thickness: 3px;

  &[data-current='true'] {
    text-decoration-color: var(--cta);
    pointer-events: none;
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
