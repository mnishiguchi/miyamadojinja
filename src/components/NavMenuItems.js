import React from 'react';
import { Link } from 'gatsby';
import { Menu } from 'semantic-ui-react';

function NavMenuItems() {
  return (
    <>
      {/* TODO: Make corresponding routes and pages */}
      <Menu.Item as={Link} to={'/狐の嫁入り神事'} content={`狐の嫁入り神事`} />
      <Menu.Item as={Link} to={'/結婚式'} content={`結婚式`} />
      <Menu.Item
        as={Link}
        to={'/御祈祷・出張祭典'}
        content={`御祈祷・出張祭典`}
      />
      <Menu.Item as={Link} to={'/授与品'} content={`授与品`} />
      <Menu.Item as={Link} to={'/境内案内'} content={`境内案内`} />
      <Menu.Item as={Link} to={'/朔日参り'} content={`朔日参り`} />
      <Menu.Item as={Link} to={'/年間行事'} content={`年間行事`} />
      <Menu.Item as={Link} to={'/交通案内'} content={`交通案内`} />
    </>
  );
}

export default NavMenuItems;
