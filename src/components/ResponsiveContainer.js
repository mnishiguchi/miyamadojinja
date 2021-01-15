import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Button,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import { createMedia } from '@artsy/fresnel';

import NavMenuItems from './NavMenuItems';
import LogoLink from './LogoLink';
import SocialButtons from './SocialButtons';
import useSiteMetadata from './useSiteMetadata';

// https://github.com/artsy/fresnel
const AppMedia = createMedia({
  breakpoints: {
    sm: 0,
    lg: 1024,
    // This is unused but necessary.
    xl: 1200,
  },
});
const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

function ContainerForMobile({ MenuItemsComponent, children }) {
  const [sidebarOpened, setMenuOpened] = React.useState(false);

  const { email, phoneHref } = useSiteMetadata();

  const hideSidebar = () => setMenuOpened(false);
  const showSidebar = () => setMenuOpened(true);

  return (
    <Sidebar.Pushable>
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
          inverted
          color="grey"
          onClick={hideSidebar}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
          }}
        />
        <div style={{ paddingTop: '5rem' }}>
          <Menu.Item as={Link} to={'/'} content="ホーム" />
        </div>

        {MenuItemsComponent}

        <Menu.Item>
          <SocialButtons />
        </Menu.Item>

        <Menu.Item>
          <p>お問合せ</p>
          <Button.Group vertical fluid inverted>
            <Button basic inverted as="a" href={`tel:${phoneHref}`}>
              <Icon name="phone" /> お電話
            </Button>
            <Button
              basic
              inverted
              as="a"
              href={`mailto:${email}?subject=ウエブサイトからのお問合せ`}
            >
              <Icon name="mail" /> Eメール
            </Button>
          </Button.Group>
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened} direction="right">
        {/* mobile app header */}
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
            inverted
            color="grey"
            onClick={showSidebar}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
            }}
          />
        </Segment>

        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}

function ContainerForDesktop({ MenuItemsComponent, children }) {
  const [isMenuOpened, setMenuOpened] = React.useState(false);

  const hideMenu = () => setMenuOpened(false);
  const showMenu = () => setMenuOpened(true);

  return (
    <>
      <Visibility
        once={false}
        onBottomPassed={showMenu}
        onBottomPassedReverse={hideMenu}
      >
        {/* desktop app header */}
        <Segment inverted vertical>
          <Menu
            fixed={isMenuOpened ? 'top' : null}
            inverted
            pointing={!isMenuOpened}
            secondary={!isMenuOpened}
            size="large"
            style={{
              padding: '0.5rem',
            }}
          >
            <LogoLink width="200px" />

            {MenuItemsComponent}

            <Menu.Menu position="right">
              <Menu.Item>
                <SocialButtons />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
      </Visibility>
      {children}
    </>
  );
}

// https://github.com/Semantic-Org/Semantic-UI-React/pull/4008
// https://github.com/artsy/fresnel
export default function ResponsiveContainer({ children }) {
  return (
    <>
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <Media at="sm">
          <ContainerForMobile
            MenuItemsComponent={<NavMenuItems />}
            children={children}
          />
        </Media>
        <Media greaterThanOrEqual="lg">
          <ContainerForDesktop
            MenuItemsComponent={<NavMenuItems />}
            children={children}
          />
        </Media>
      </MediaContextProvider>
    </>
  );
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
