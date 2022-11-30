import styled from 'styled-components';
import { AppLink } from './AppLink';

const StyledNavLinks = styled.nav`
  &.top-nav {
    position: sticky;
    top: 0;
    background: var(--bg-color);
    z-index: 1;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  ul {
    list-style: none;
    display: flex;
    overflow: auto;
    padding: 0 10px 15px 0;

    @supports (gap: 20px) {
      gap: 20px;
    }

    @supports not (gap: 20px) {
      li:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
`;

export function NavLinks({
  pathname = '/',
  links,
  ...props
}: {
  pathname?: string;
  links: Array<{ name: string; href: string }>;
}) {
  return (
    <StyledNavLinks {...props}>
      <ul>
        {links.map(({ name, href }) => (
          <li key={name}>
            <AppLink
              {...{
                isCurrent: pathname === href,
                className: 'link',
                href,
                target: '',
              }}
            >
              {name}
            </AppLink>
          </li>
        ))}
      </ul>
    </StyledNavLinks>
  );
}
