import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';

import NavMenuItems from './NavMenuItems';
import LogoLink from './LogoLink';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

function ContainerForMobile({ HeroComponent, MenuItemsComponent, children }) {
  const [sidebarOpened, setMenuOpened] = React.useState(false);

  const hideSidebar = () => setMenuOpened(false);
  const showSidebar = () => setMenuOpened(true);

  // Specifiy the breakpoint in maxWidth.
  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyTablet.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation="overlay"
        inverted
        onHide={hideSidebar}
        vertical
        visible={sidebarOpened}
        direction="right"
      >
        <Button
          icon="times"
          basic
          color="grey"
          onClick={hideSidebar}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
          }}
        />
        <div style={{ paddingTop: '5rem' }}>
          <Menu.Item as={Link} to={'/'} content="Home" />
        </div>

        {MenuItemsComponent && MenuItemsComponent}
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened} direction="right">
        <Segment
          inverted
          style={{
            padding: '0.5rem',
          }}
          vertical
        >
          <LogoLink width="200px" />
          <Button
            icon="sidebar"
            basic
            color="grey"
            onClick={showSidebar}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
            }}
          />
        </Segment>

        {HeroComponent && HeroComponent}

        {children}
      </Sidebar.Pusher>
    </Responsive>
  );
}

function ContainerForDesktop({ MenuItemsComponent, children }) {
  const [isMenuOpened, setMenuOpened] = React.useState(false);

  const hideMenu = () => setMenuOpened(false);
  const showMenu = () => setMenuOpened(true);

  // Specifiy the breakpoint in minWidth.
  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyComputer.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={showMenu}
        onBottomPassedReverse={hideMenu}
      >
        <Segment
          inverted
          style={{
            minHeight: 'inherit',
          }}
          vertical
        >
          <Menu
            fixed={isMenuOpened ? 'top' : null}
            inverted
            pointing={!isMenuOpened}
            secondary={!isMenuOpened}
            size="large"
          >
            <Container>
              <LogoLink width="200px" />

              {MenuItemsComponent}
            </Container>
          </Menu>
        </Segment>
      </Visibility>

      {children}
    </Responsive>
  );
}

// Adopted from Semantic-Org/Semantic-UI-React example layout.
// https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js
export default function ResponsiveContainer({ children }) {
  return (
    <>
      <ContainerForDesktop
        MenuItemsComponent={<NavMenuItems />}
        children={children}
      />
      <ContainerForMobile
        MenuItemsComponent={<NavMenuItems />}
        children={children}
      />
    </>
  );
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
