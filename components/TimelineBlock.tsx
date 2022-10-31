import * as React from 'react';
import styled from 'styled-components';

interface ISectionProps {
  children: React.ReactNode;
  className: string;
}

const StyledTimelineBlock = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  padding: 2rem 0 0;
  position: relative;

  .icon {
    --size: 44px;
    width: var(--size);
    height: var(--size);
    background: var(--bg-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .icon-in {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: inherit;
      justify-content: inherit;
      align-items: inherit;
      font-size: 30px;
    }
  }

  .title {
    letter-spacing: -0.03em;
    font-family: var(--sans);
    font-weight: 800;
    line-height: 1;
  }

  p {
    grid-column: 2;
    font-family: var(--sans);
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;
  }

  hr {
    margin: 15px 0;
    border: 1px solid #222;
    grid-column: 2;
  }

  :first-child {
    padding-top: 0;
    margin-top: 2rem;
  }

  :last-child {
    padding-bottom: 0;
    margin-bottom: 2rem;
  }

  ::before {
    content: '';
    position: absolute;
    --width: 2px;
    width: var(--width);
    height: calc(100%);
    left: 0;
    top: 44px;
    transform: translateX(calc(22px - var(--width)));
  }

  &.inception::before {
    background-color: #c09068;
  }

  &.past-life::before {
    background-color: #7d7d7c;
  }

  &.the-web::before {
    background-color: #59b3d6;
  }

  &.ongoings::before {
    background-color: #db5b55;
  }

  &.edgio::before {
    background-color: #c2a48b;
  }

  &.writing-reading::before {
    background-color: #be8d67;
  }

  &.lab::before {
    background-color: #007528;
  }

  &.csc::before {
    background-color: #6e8c56;
  }

  &.septum::before {
    background-color: #fff;
    height: calc(100% - 44px);
  }

  @media screen and (max-width: 1300px) {
    row-gap: 0;
  }

  @media screen and (max-width: 1000px) {
    padding: 1rem 0;

    p {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 700px) {
    gap: 0;
    column-gap: 0.5rem;

    .title {
      font-size: 1.375rem;
    }

    p {
      font-size: 1rem;
    }

    :first-child {
      margin-top: 0px;
    }
  }
`;

function getTimelineBlockEmoji(className: string) {
  switch (className.toLowerCase()) {
    case 'inception':
      return '👶🏽';
    case 'past-life':
      return '🪦';
    case 'the-web':
      return '🌐';
    case 'ongoings':
      return '🫁';
    case 'edgio':
      return '💼';
    case 'writing-reading':
      return '✍🏽';
    case 'lab':
      return '🧪';
    case 'csc':
      return '🪖';
    default:
      return (
        <svg
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.2102 7.97813C22.1501 7.74509 22.2214 7.4959 22.4035 7.33858L23.1782 6.66937C24.0808 5.88973 24.1805 4.52601 23.4009 3.62342L23.048 3.21484L2.31299 21.1255L2.6659 21.534C3.44555 22.4366 4.80927 22.5363 5.71186 21.7567L6.38446 21.1757C6.56659 21.0183 6.8235 20.984 7.04532 21.0773C10.7702 22.6454 15.2892 22.0449 18.629 19.16C21.9688 16.2751 23.2201 11.8914 22.2102 7.97813ZM19.2821 10.0349C19.486 12.4251 18.5642 14.9355 16.5115 16.7086C14.4588 18.4816 11.8411 19.0286 9.50589 18.4794L19.2821 10.0349Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.770871 16.0366L1.09125 15.7598C1.29198 15.5864 1.3563 15.3039 1.26351 15.0555C-0.289554 10.897 0.868002 5.96482 4.51216 2.81704C8.15634 -0.330736 13.2044 -0.758888 17.0929 1.38228C17.3253 1.51022 17.6141 1.48765 17.8148 1.31426L18.2373 0.949296C19.1399 0.16965 20.5036 0.269318 21.2833 1.17191L21.6362 1.58048L0.901182 19.4911L0.548262 19.0825C-0.231384 18.1799 -0.131716 16.8162 0.770871 16.0366ZM6.62967 5.26846C4.21637 7.35305 3.36621 10.4568 4.07073 13.1862L14.8353 3.88789C12.2373 2.79403 9.04296 3.18389 6.62967 5.26846Z"
            fill="white"
          />
        </svg>
      );
  }
}

export function TimelineBlock({ children, className }: ISectionProps) {
  return (
    <StyledTimelineBlock className={[className].filter(Boolean).join(' ')}>
      <div className="icon">
        <div className="icon-in">{getTimelineBlockEmoji(className)}</div>
      </div>
      {children}
    </StyledTimelineBlock>
  );
}
