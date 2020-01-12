import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Header, Segment } from 'semantic-ui-react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import AppHero from '../components/AppHero';
import IntroBlurbs from '../components/IntroBlurbs';

export function IndexPageTemplate({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) {
  const backgroundImageUrl = !!image.childImageSharp
    ? image.childImageSharp.fluid.src
    : image;

  return (
    <>
      <SEO title={title} description={description} />

      <AppHero
        title={title}
        subheading={subheading}
        backgroundImageUrl={backgroundImageUrl}
      />

      <Container>
        <Segment style={{ padding: '5rem 0' }} vertical>
          <Container text>
            <Header as="h2" style={{ fontSize: '2em' }}>
              {mainpitch.title}
            </Header>
            <p style={{ fontSize: '1.33em' }}>{mainpitch.description}</p>
          </Container>
        </Segment>

        <Segment style={{ padding: '5rem 0' }} vertical>
          <Container text>
            <Header as="h1" style={{ fontSize: '3rem' }}>
              {heading}
            </Header>
            <p style={{ fontSize: '2.5rem' }}>{description}</p>
          </Container>
        </Segment>

        <Segment style={{ padding: '5rem 0' }} vertical>
          <IntroBlurbs introBlurbs={intro.blurbs} />
        </Segment>
      </Container>
    </>
  );
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

function IndexPage({ data }) {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
