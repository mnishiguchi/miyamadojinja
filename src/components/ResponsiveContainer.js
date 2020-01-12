import React from 'react';
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

const getWidth = () => {
  const isSSR = typeof window === 'undefined';
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

function ContainerForMobile({ HeroComponent, MenuItemsComponent, children }) {
  const [sidebarOpened, setMenuOpened] = React.useState(false);

  const hideSidebar = () => setMenuOpened(false);
  const showSidebar = () => setMenuOpened(true);

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
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
        {MenuItemsComponent && MenuItemsComponent}
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened} direction="right">
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: HeroComponent ? 350 : 'inherit',
            padding: '1em 0em',
          }}
          vertical
        >
          <Container style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button icon basic color="teal" onClick={showSidebar}>
              <Icon name="sidebar" />
            </Button>
          </Container>

          {HeroComponent && HeroComponent}
        </Segment>

        {children}
      </Sidebar.Pusher>
    </Responsive>
  );
}

function ContainerForDesktop({ HeroComponent, MenuItemsComponent, children }) {
  const [isMenuOpened, setMenuOpened] = React.useState(false);

  const hideMenu = () => setMenuOpened(false);
  const showMenu = () => setMenuOpened(true);

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={showMenu}
        onBottomPassedReverse={hideMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: HeroComponent ? 700 : 'inherit',
            padding: '1em 0em',
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
            <Container>{MenuItemsComponent}</Container>
          </Menu>

          {HeroComponent}
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
