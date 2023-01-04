import * as React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import { slugify } from '../utils/slugify';

const StyledHeading = styled.h1`
  scroll-margin-top: 6rem;

  .anchor {
    text-decoration: none;

    > span {
      visibility: hidden;
      margin-left: 8px;
      color: var(--cta);
    }
    :hover {
      > span {
        visibility: visible;
      }
    }
  }
`;

type HeadingProps = {
  id: string;
  level: number;
  children: React.ReactNode;
  className: string;
};

export function Heading({
  id = '',
  level = 1,
  children,
  className,
}: HeadingProps) {
  const router = useRouter();

  const isBlog = router.pathname.startsWith('/blog');
  const isH1 = level === 1;
  const as = `h1${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  if (isBlog) {
    if (!isH1) {
      return (
        <StyledHeading
          {...{
            as,
            id,
            className: ['heading', className].filter(Boolean).join(' '),
          }}
        >
          <Link href={`#${slugify(id)}`} passHref>
            <a id={id} className="anchor">
              {children}
              <span aria-hidden="true">#</span>
            </a>
          </Link>
        </StyledHeading>
      );
    }

    return <StyledHeading className="post-title">{children}</StyledHeading>;
  }

  return <h2 className="title">{children}</h2>;
}
