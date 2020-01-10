import React from 'react';
import { withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container, Header, Segment } from 'semantic-ui-react';

import ResponsiveContainer from './ResponsiveContainer';
import BackToTopLink from './BackToTopLink';
import useSiteMetadata from './useSiteMetadata';

function TemplateWrapper({ children }) {
  const { title, description } = useSiteMetadata();
  return (
    <ResponsiveContainer>
      <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>

      <main style={{ minHeight: '80vh' }}>{children}</main>

      <Segment
        as="footer"
        inverted
        vertical
        clearing
        style={{ padding: '5em 0em' }}
      >
        <Container>
          <Header as="h4" inverted>
            © {new Date().getFullYear()} {title}
          </Header>
          <p>{description}</p>
          <span style={{ float: 'right' }}>
            <BackToTopLink />
          </span>
        </Container>
      </Segment>
    </ResponsiveContainer>
  );
}

export default TemplateWrapper;
