import React from 'react';
import { withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from 'semantic-ui-react';

import ResponsiveContainer from './ResponsiveContainer';
import BackToTopLink from './BackToTopLink';
import useSiteMetadata from './useSiteMetadata';
import LogoLink from './LogoLink';

function TemplateWrapper({ children }) {
  const {
    title,
    description,
    email,
    phone,
    phoneIntl,
    address,
    gmap,
  } = useSiteMetadata();
  return (
    <ResponsiveContainer>
      {/* prettier-ignore */}
      <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="apple-touch-icon" sizes="57x57" href={`${withPrefix('/')}img/apple-icon-57x57.png`} />
        <link rel="apple-touch-icon" sizes="60x60" href={`${withPrefix('/')}img/apple-icon-60x60.png`} />
        <link rel="apple-touch-icon" sizes="72x72" href={`${withPrefix('/')}img/apple-icon-72x72.png`} />
        <link rel="apple-touch-icon" sizes="76x76" href={`${withPrefix('/')}img/apple-icon-76x76.png`} />
        <link rel="apple-touch-icon" sizes="114x114" href={`${withPrefix('/')}img/apple-icon-114x114.png`} />
        <link rel="apple-touch-icon" sizes="120x120" href={`${withPrefix('/')}img/apple-icon-120x120.png`} />
        <link rel="apple-touch-icon" sizes="144x144" href={`${withPrefix('/')}img/apple-icon-144x144.png`} />
        <link rel="apple-touch-icon" sizes="152x152" href={`${withPrefix('/')}img/apple-icon-152x152.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-icon-180x180.png`} />
        <link rel="icon" type="image/png" sizes="192x192"  href={`${withPrefix('/')}img/android-icon-192x192.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${withPrefix('/')}img/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="96x96" href={`${withPrefix('/')}img/favicon-96x96.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${withPrefix('/')}img/favicon-16x16.png`} />
        <link rel="icon"  type="image/png" href={`${withPrefix('/')}img/favicon.ico`}/>
        <link rel="manifest" href={`${withPrefix('/')}img/manifest.json`} />
        <meta name="theme-color" content="#00000" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta  property="og:image" content={`${withPrefix('/')}img/img/honden-0006.jpg`} />
      </Helmet>

      <main style={{ minHeight: '80vh' }}>{children}</main>

      <Segment secondary vertical padded="very">
        <Container>
          <Header as="h2">お問合せはこちら</Header>
          <Button.Group fluid>
            <Button basic color="blue" as="a" href={`mailto:${email}`}>
              <Icon name="mail" />
              {email}
            </Button>

            <Button basic color="teal" as="a" href={`tel:${phoneIntl}`}>
              <Icon name="phone" /> {phone}
            </Button>
          </Button.Group>
        </Container>
      </Segment>

      <Segment as="footer" inverted vertical style={{ padding: '5rem 0' }}>
        <span
          style={{
            position: 'absolute',
            bottom: '5rem',
            right: '1rem',
            zIndex: 2,
          }}
        >
          <BackToTopLink />
        </span>
        <Container>
          <Grid columns="equal" inverted stackable>
            <Grid.Row>
              <Grid.Column>
                <LogoLink width="300px" />
              </Grid.Column>
              <Grid.Column>
                <List as="address" link inverted>
                  <List.Item>
                    鎮座地:{' '}
                    <a href={gmap} target="_blank" rel="noopener noreferrer">
                      {address}
                    </a>
                  </List.Item>
                  <Divider hidden />
                  <List.Item>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>
                        © {new Date().getFullYear()} {title}
                      </span>
                    </div>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
  );
}

export default TemplateWrapper;
