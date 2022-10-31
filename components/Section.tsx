import * as React from 'react';
import styled from 'styled-components';

interface ISectionProps {
  children: React.ReactNode;
  className: string;
}

const StyledSection = styled.div`
  .hero {
    max-width: 768px;
    margin-right: auto;
    padding: 6rem 0 6rem 2rem;
  }

  .hero-title {
    font-size: 4rem;
    border-bottom: 1px solid #222;
    margin-bottom: 2rem;
    padding-bottom: 3rem;
    letter-spacing: -0.03em;
    font-family: var(--sans);
    font-weight: 800;
    line-height: 1;
    --max-width: 80%;
    max-width: var(--max-width);
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
      --max-width: 75%;
    }
  }

  @media screen and (max-width: 700px) {
    .hero-title {
      font-size: 8vw;
    }

    .hero-title {
      padding-bottom: 2rem;
      --max-width: 80%;
    }
  }
`;

export function Section({ children, className }: ISectionProps) {
  return (
    <StyledSection>
      <section className={[className].filter(Boolean).join(' ')}>
        {children}
      </section>
    </StyledSection>
  );
}
