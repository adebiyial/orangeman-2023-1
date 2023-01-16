import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  padding-top: 6rem;
  display: grid;
  row-gap: 0.5rem;

  .hero-title {
    font-size: 3rem;
    letter-spacing: -0.03em;
    font-family: var(--sans);
    font-weight: 800;
    line-height: 1;
  }

  .hero-sub {
    font-weight: 400;
  }

  @media screen and (max-width: 1300px) {
    .hero-title {
      font-size: 4vw;
    }
  }

  @media screen and (max-width: 1000px) {
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

export default function Hero({ children }: { children: React.ReactNode }) {
  return <StyledHero>{children}</StyledHero>;
}
