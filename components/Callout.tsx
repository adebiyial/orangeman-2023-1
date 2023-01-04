import styled from 'styled-components';

interface ICalloutProps {
  title: string;
  type: 'caution' | 'check' | 'tip' | 'warning' | 'info';
  children: React.ReactNode;
}

const StyledCallout = styled.div`
  margin: 0 auto;
  border-radius: 4px;
  padding: 15px 20px;
  width: 100%;
  color: #fff;

  &.tip {
    background: linear-gradient(to right, #ff600078, #ff000057);
  }

  &.info {
    background: linear-gradient(to right, #00ffcf3b, #0070ff17);
  }

  .content,
  .copy {
    display: grid;
    row-gap: 10px;
  }

  .title {
    font-weight: 800;
    font-size: 24px;
    border-bottom: 0.2px solid rgba(255, 255, 255, 0.4);
    padding-bottom: 10px;
    margin-top: 0 !important;
  }
`;

export function Callout({ title, type, children }: ICalloutProps) {
  const computedClassName = ['callout', type].filter(Boolean).join(' ');

  return (
    <StyledCallout className={computedClassName}>
      <div className="copy">
        <h1 className="title">{title}</h1>
        <div className="content">{children}</div>
      </div>
    </StyledCallout>
  );
}
