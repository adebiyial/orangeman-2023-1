import { AiFillCamera } from 'react-icons/ai';
import styled from 'styled-components';

interface IIconProps {
  icon: string;
}

interface ICalloutProps {
  title: string;
  type: 'caution' | 'check' | 'note' | 'warning';
  children: React.ReactNode;
}

function Icon({ icon }: IIconProps) {
  switch (icon.toLowerCase()) {
    case 'note':
      return <AiFillCamera />;

    case 'check':
      return <AiFillCamera />;

    case 'warning':
      return <AiFillCamera />;

    default:
      return <AiFillCamera />;
  }
}

const StyledCallout = styled.div`
  margin: 1.5em auto;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;

  @media screen and (min-width: 600px) {
    padding: 15px 20px;
  }

  &.note {
    background: #fefce8;
    color: #000;
  }

  &.caution {
    background: #4d3d3c;
    color: white;
  }

  .content {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 40px;
    align-content: center;
    align-items: center;
  }

  .copy {
    display: grid;
    row-gap: 10px;
  }

  .title {
    font-weight: 800;

    + span {
      font-weight: 500;
    }
  }
`;

export function Callout({ title, type, children }: ICalloutProps) {
  const computedClassName = ['callout', type].filter(Boolean).join(' ');

  return (
    <StyledCallout className={computedClassName}>
      <div className="content">
        <Icon icon={type} />
        <div className="copy">
          <span className="title">{title}</span>
          <span>{children}</span>
        </div>
      </div>
    </StyledCallout>
  );
}
