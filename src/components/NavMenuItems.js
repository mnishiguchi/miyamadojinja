import React from 'react';
import { Link } from 'gatsby';
import { Menu } from 'semantic-ui-react';

function NavMenuItems() {
  return (
    <>
      <Menu.Item as={Link} to={'/b2'}>
        b2
      </Menu.Item>
      <Menu.Item as={Link} to={'/b3'}>
        b3
      </Menu.Item>
      <Menu.Item as={Link} to={'/404'}>
        404
      </Menu.Item>
      <Menu.Item as={Link} to={'/wrong'}>
        wrong
      </Menu.Item>
      <Menu.Item as="a" href={'/admin'}>
        admin
      </Menu.Item>
      {process.env.NODE_ENV === 'development' && (
        <Menu.Item as="a" href="http://localhost:8000/___graphql">
          Graphql
        </Menu.Item>
      )}
    </>
  );
}

export default NavMenuItems;
