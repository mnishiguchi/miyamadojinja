import React from 'react';
import { Link } from 'gatsby';
import { Menu } from 'semantic-ui-react';

function NavMenuItems() {
  return (
    <>
      <Menu.Item as={Link} to={'/yomeiri'} content={`狐の嫁入り神事`} />
      <Menu.Item as={Link} to={'/wedding'} content={`結婚式`} />
      <Menu.Item as={Link} to={'/kitou'} content={`御祈祷・出張祭典`} />
      <Menu.Item as={Link} to={'/omamori'} content={`おふだ・お守り`} />
      <Menu.Item as={Link} to={'/keidai'} content={`境内案内`} />
      <Menu.Item as={Link} to={'/saireiichi'} content={`祭礼市（朔日市場）`} />
      <Menu.Item as={Link} to={'/annual-events'} content={`年間行事`} />
    </>
  );
}

export default NavMenuItems;
