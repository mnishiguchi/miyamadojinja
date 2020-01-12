import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';

function AppHero({ mobile, title, subheading, backgroundImageUrl }) {
  return (
    <div
      style={{
        alignItems: `center`,
        backgroundAttachment: 'fixed',
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        display: `flex`,
        justifyContent: `center`,
        marginBottom: `5rem`,
        width: '100vw',
        height: '80vh',
      }}
    >
      <Container>
        <Header
          as="h1"
          content={title}
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as="h2"
          content={subheading}
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
      </Container>
    </div>
  );
}

AppHero.propTypes = {
  mobile: PropTypes.bool,
};

export default AppHero;
