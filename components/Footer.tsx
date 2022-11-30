import styled from 'styled-components';
import { NavLinks } from './NavLinks';

const StyledFooter = styled.footer`
  display: grid;
  row-gap: 20px;
  padding-bottom: 6rem;

  @media screen and (max-width: 700px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const footerLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/adebiyial',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/adebiyial',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/adebiyial',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/adebiyiadedotun',
  },
];

export default function Footer() {
  return (
    <StyledFooter>
      <h2 className="title">Don't be a stranger</h2>
      <NavLinks {...{ links: footerLinks }} />
      <p>&copy; Adebiyi Adedotun, 2022. All rights reserved</p>
    </StyledFooter>
  );
}
