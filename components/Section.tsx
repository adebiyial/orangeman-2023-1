import * as React from 'react';
import styled from 'styled-components';

interface ISectionProps {
  children: React.ReactNode;
  className: string;
}

const StyledSection = styled.div`
  &.timeline-wrap {
    position: relative;
    margin: 3rem 0;
    border-top: 1px solid #222;
    border-bottom: 1px solid #222;
  }

  .hero {
    max-width: 768px;
    margin-right: auto;
    padding: 6rem 0 6rem 2rem;
  }

  .hero-title {
    font-size: 4rem;
    margin-bottom: 2rem;
    letter-spacing: -0.03em;
    font-family: var(--sans);
    font-weight: 800;
    line-height: 1;
  }

  .footer {
    ul {
      list-style: none;
      padding-left: 0;
      display: flex;

      @supports (gap: 20px) {
        gap: 20px;
      }

      @supports not (gap: 20px) {
        li:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .hero {
      padding-right: 2rem;
    }

    .hero-title {
      font-size: 4vw;
    }
  }

  @media screen and (max-width: 1000px) {
    .hero {
      padding-right: 1rem;
      padding-left: 1rem;
    }

    .hero-title {
      font-size: 6vw;
    }
  }

  @media screen and (max-width: 700px) {
    .hero-title {
      font-size: 8vw;
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
