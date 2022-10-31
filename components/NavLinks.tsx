import styled from 'styled-components';
import { AppLink } from './AppLink';

const StyledNavLinks = styled.nav`
  ul {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;

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
  links,
}: {
  links: Array<{ name: string; href: string }>;
}) {
  return (
    <StyledNavLinks>
      <ul>
        {links.map(({ name, href }) => (
          <li key={name}>
            <AppLink {...{ className: 'link', href, target: '' }}>
              {name}
            </AppLink>
          </li>
        ))}
      </ul>
    </StyledNavLinks>
  );
}
