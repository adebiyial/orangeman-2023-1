import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import styled from 'styled-components';

export default function getDescriptiveLanguage(language: string) {
  const normalizedLanguageString = language.replace('language-', '');

  switch (normalizedLanguageString) {
    case 'diff':
      return 'Diff';
    case 'jsx':
      return 'JSX';
    case 'js':
    case 'javascript':
      return 'JavaScript';
    case 'ts':
    case 'tsx':
    case 'typescript':
      return 'TypeScript';
    case 'bash':
    case 'cli':
    case 'terminal':
      return 'Bash';
    case 'json':
      return 'JSON';
    case 'md':
    case 'markdown':
      return 'Markdown';
    case 'dir':
    case 'directory':
      return 'Directory';
    case 'html':
    case 'htm':
      return 'HTML';
    case 'yml':
    case 'yaml':
      return 'YAML';
    case 'groovy':
      return 'Groovy';
    case 'graphql':
      return 'GraphQL';
    case 'unknown':
      return '';
    default:
      return normalizedLanguageString;
  }
}

export const StyledCustomPre = styled.div`
  overflow: hidden;

  .code-block__inner {
    display: flex;
    flex-direction: column;
    background: #121212;
    border: 2px solid #363636;
    border-radius: 4px;
  }

  .code-block__header {
    border-bottom: 2px solid #363636;
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
    text-transform: uppercase;
  }

  .code-block__content {
    max-height: 500px;
    overflow: auto;
  }

  code {
    --scrollbar-bg: #777;
  }
`;

export function Code({
  children,
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
              {children.trim()}
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
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export const Line = styled.div`
  display: table-row;
`;

export const LineContent = styled.span`
  display: table-cell;
  padding-left: 0.5em;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 0.5em;
  user-select: none;
  letter-spacing: -1px;
  border-right: 2px solid #363636;
  position: sticky;
  left: 0;
  background: #121212;
  padding-left: 15px;
`;
