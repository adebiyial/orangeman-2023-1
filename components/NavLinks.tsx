import styled from 'styled-components';
import { AppLink } from './AppLink';

const StyledNavLinks = styled.nav`
  &.top-nav {
    position: sticky;
    top: 0;
    background: #0f0f0f;
    z-index: 1;
    padding: 19px 10px;
  }

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
  ...props
}: {
  links: Array<{ name: string; href: string }>;
}) {
  console.log(props);
  return (
    <StyledNavLinks {...props}>
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
