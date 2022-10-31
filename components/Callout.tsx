import { MdCodeOff } from 'react-icons/md';
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
      return <MdCodeOff />;

    case 'check':
      return <MdCodeOff />;

    case 'warning':
      return <MdCodeOff />;

    default:
      return <MdCodeOff />;
  }
}

const StyledCallout = styled.div`
  margin: 1.5em auto;
  border-radius: 4px;
  padding: 15px 20px;

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
    column-gap: 20px;
    align-content: center;
    align-items: center;

    > svg {
      font-size: 50px;
    }
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
