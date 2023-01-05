import * as React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import { slugify } from '../utils/slugify';

const StyledHeading = styled.h1`
  .anchor {
    text-decoration: none;
    scroll-margin-top: 6rem;

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
  const as = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  const cs = [isBlog && !isH1 ? 'heading' : '', className]
    .filter(Boolean)
    .join(' ');
  const sluggedId = slugify(id);

  if (isBlog) {
    if (!isH1) {
      return (
        <StyledHeading
          {...{
            as,
            sluggedId,
            className: ['heading', className].filter(Boolean).join(' '),
          }}
        >
          <Link href={`#${sluggedId}`} passHref>
            <a id={sluggedId} className="anchor">
              {children}
              <span aria-hidden="true">#</span>
            </a>
          </Link>
        </StyledHeading>
      );
    }

    return <StyledHeading className={cs}>{children}</StyledHeading>;
  }

  return <h2 className={cs}>{children}</h2>;
}
