import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface IAppLinkProps {
  target: string;
  href: string;
  className: string;
  children: React.ReactNode;
}

const StyledAppLink = styled.a`
  text-decoration: underline #59b3d6 3px;
  text-underline-offset: 5px;
  text-decoration-line: underline;
  text-decoration-color: #59b3d6;
  text-decoration-thickness: 3px;
`;

export function AppLink(props: IAppLinkProps) {
  const { target: t, href, className, children } = props;
  const target = t || (href.startsWith('http') ? '_blank' : undefined);

  return (
    <Link {...props} passHref>
      <StyledAppLink
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
        className={className}
      >
        {children}
      </StyledAppLink>
    </Link>
  );
}
