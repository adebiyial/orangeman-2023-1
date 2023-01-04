import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import styled from 'styled-components';
import getDescriptiveLanguage from '../utils/getDescriptiveLanguage';

export const StyledCustomPre = styled.div`
  overflow: hidden;
  margin: 0 0 1.5em;

  .code-block__inner {
    display: flex;
    flex-direction: column;
    background: #121212;
    border: 1px solid #363636;
    border-radius: 4px;
  }

  .code-block__header {
    border-bottom: 1px solid #363636;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    padding: 6px 6px 6px 8px;
    font-size: 14px;
    color: var(--colors-white0);
    display: flex;
    justify-content: space-between;

    [class*='header-'] {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .code-block__filename {
      background-color: #363636;
      border-radius: 4px;
      border: 1px solid #1a1a1a;
    }
  }

  .code-block__header-text {
    font-weight: 700;
  }

  .code-block__content {
    max-height: 800px;
    overflow: auto;
  }

  code {
    --scrollbar-bg: #777;
  }

  @media screen and (max-width: 700px) {
    padding-left: 0 !important;
    padding-right: 0 !important;

    .code-block__inner {
      border-radius: 0;
      border-left: none;
      border-right: none;
    }
  }
`;

export function Code({
  content,
  language,
}: {
  children: string;
  content: string;
  language: string;
}) {
  return (
    <StyledCustomPre>
      <div className="code-block">
        <div className="code-block__inner">
          <header className="code-block__header">
            <div className="header-start">
              <span className="code-block__header-text">
                {getDescriptiveLanguage(language)}
              </span>
            </div>
          </header>

          <main className="code-block__content">
            <CodeBlock {...{ language: language as Language }}>
              {content.trim()}
            </CodeBlock>
          </main>
        </div>
      </div>
    </StyledCustomPre>
  );
}

function CodeBlock({
  language,
  children,
}: {
  language: Language;
  children: string;
}) {
  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={['custom-scrollbar', className].filter(Boolean).join(' ')}
          style={style}
        >
          <LineContent className="line-content">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                <span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            ))}
          </LineContent>
        </pre>
      )}
    </Highlight>
  );
}

export const LineContent = styled.code`
  padding: 15px;
  display: block;
`;

export const LineNo = styled.span`
  text-align: right;
  padding-right: 0.5em;
  user-select: none;
  letter-spacing: -1px;
  border-right: 1px solid #363636;
  position: sticky;
  left: 0;
  background: #121212;
  padding-left: 15px;
  min-width: 38px;
`;
