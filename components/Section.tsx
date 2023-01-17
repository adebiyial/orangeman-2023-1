import * as React from 'react';
import styled from 'styled-components';

interface ISectionProps {
  children: React.ReactNode;
  className: string;
}

const StyledSection = styled.div`
  &.timeline-wrap,
  &.publications-wrap {
    margin: 3rem 0;
  }

  .timeline,
  .publications {
    border-top: 1px solid var(--hr);
    border-bottom: 1px solid var(--hr);
    padding: 2rem 0;
  }

  .publications {
    ol {
      margin: 1rem 0 3rem 0;
    }
  }

  .blog {
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--hr);
    display: grid;
    row-gap: 1rem;
    margin-bottom: 3rem;

    .post-title {
      font-size: 2.5rem;
      letter-spacing: -0.03em;
      font-family: var(--sans);
      font-weight: 800;
      line-height: 1;
      border-top: 1px solid var(--hr);
      border-bottom: 1px solid var(--hr);
      padding: 4rem 0 2rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 20px;
    }

    li {
      line-height: 1.5;
    }

    @media screen and (max-width: 1300px) {
      .post-title {
        font-size: 4vw;
      }
    }

    @media screen and (max-width: 1000px) {
      .post-title {
        font-size: 5vw;
      }
    }

    @media screen and (max-width: 700px) {
      .post-title {
        font-size: 8vw;
        line-height: 1.2;
        padding-left: 1rem;
        padding-right: 1rem;
      }

      > *:not(ol, ul) {
        padding-left: 1rem;
        padding-right: 1rem;

        &.callout {
          border-radius: 0;
          width: 100%;
        }
      }
    }
  }
`;

export function Section({ children, className }: ISectionProps) {
  const computedClassName = [className].filter(Boolean).join(' ');

  return (
    <StyledSection {...{ className: `${computedClassName}-wrap` }}>
      <section {...{ className: computedClassName }}>{children}</section>
    </StyledSection>
  );
}
