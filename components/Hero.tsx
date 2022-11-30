import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.div`
  padding-top: 6rem;

  .hero-title {
    font-size: 3rem;
    margin-bottom: 2rem;
    letter-spacing: -0.03em;
    font-family: var(--sans);
    font-weight: 800;
    line-height: 1;
  }

  @media screen and (max-width: 1300px) {
    .hero-title {
      font-size: 4vw;
      /* --max-width: 75%; */
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
      /* --max-width: 90%; */
    }
  }
`;

export default function Hero({ text }: { text: string }) {
  return (
    <StyledHero>
      <h1 className="hero-title">{text}</h1>
    </StyledHero>
  );
}
