import React from 'react';
import { Link } from 'gatsby';
import { Menu } from 'semantic-ui-react';

function NavMenuItems() {
  return (
    <>
      {/* TODO: Make corresponding routes and pages */}
      <Menu.Item as={Link} to={'/yomeiri'} content={`狐の嫁入り神事`} />
      <Menu.Item as={Link} to={'/wedding'} content={`結婚式`} />
      <Menu.Item as={Link} to={'/kitou'} content={`御祈祷・出張祭典`} />
      <Menu.Item as={Link} to={'/omamori'} content={`授与品`} />
      <Menu.Item as={Link} to={'/keidai'} content={`境内案内`} />
      <Menu.Item as={Link} to={'/tsuitachi'} content={`朔日参り`} />
      <Menu.Item as={Link} to={'/annual-events'} content={`年間行事`} />
    </>
  );
}

export default NavMenuItems;
