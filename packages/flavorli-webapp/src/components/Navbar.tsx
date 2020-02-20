import React from 'react';
import {useHistory} from 'react-router';
import Avatar from './Avatar';
import styled from 'styled-components';
import {Stack} from '@flavorli/elements';

const Navbar = () => {
  const history = useHistory();
  return (
    <NavbarWrapper
      direction="horizontal"
      background="surface"
      height="45px"
      width="100%"
      distribution="center"
      alignment="center"
      padding={16}
    >
      <NavItem />
      <Logo onClick={() => history.push('/')}>flavor.li</Logo>
      <NavItem>
        <Avatar
          onClick={() =>
            history.push('/profile/9b2ba367-08ec-4b49-8334-7dc28bcce0c0')
          }
        />
      </NavItem>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled(Stack)`
  border-bottom: 1px solid #eee;
`;

const Logo = styled.p`
  font-family: ${p => p.theme.families.Pacifico};
  font-size: 22px;
  color: ${p => p.theme.colors.primary};
`;

const NavItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
