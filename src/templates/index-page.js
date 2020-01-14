import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
// import IntroBlurbs from '../components/IntroBlurbs';

// TODO: Provide info from front matter so that we can edit them from CMS.
const PlaceHolderIntroBlurbRow = ({ header, description }) => (
  <Grid.Row>
    <Grid.Column width={4}>
      <div style={{ background: '#555', width: '80px', height: '80px' }} />
    </Grid.Column>
    <Grid.Column width={12}>
      <Header>{header}</Header>
      <p>
        {description ||
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed distinctio, omnis doloremque quas quis, repellat illum veritatis ab commodi voluptas nihil similique tenetur itaque cumque, voluptate aut. Nam, repellat ex?'}
      </p>
    </Grid.Column>
  </Grid.Row>
);

export function IndexPageTemplate({
  image,
  title,
  heading,
  subheading,
  description,
  intro,
}) {
  const backgroundImageUrl = !!image.childImageSharp
    ? image.childImageSharp.fluid.src
    : image;

  return (
    <>
      <SEO title={title} description={description} />

      <div
        style={{
          alignItems: `center`,
          // backgroundAttachment: 'fixed',
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          display: `flex`,
          justifyContent: `center`,
          width: '100vw',
          height: '80vh',
        }}
      />

      <Container>
        <Segment padded="very" vertical>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.8' }}>{description}</p>
        </Segment>

        <Segment padded="very" vertical>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.8' }}></p>
          <Grid celled="internally" stackable>
            <Grid.Row>
              <Grid.Column
                width={10}
                style={{ paddingBottom: '5em', paddingTop: '5em' }}
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  由緒
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  当社は、洲崎濱宮神明神社（すざきはまみやしんめいじんじゃ）の境内社で海山道開運稲荷神社と称し、丁度、前社は伊勢の内宮さま、後社は外宮さまに当り、境内社の方が著名であるのは誠に尊いことです。
                  俗に“みやまどさん”（総称海山道神社）とよばれるのは、伊勢路の伏見稲荷総社として高遠なる御神徳を称えて此の土地の地名で代称されているのです。
                  その昔、西行の「昨日たち今日立ちみれば日永なる洲崎に見ゆる森のひとむら」と詠まれたと言うそのままの森は、神々しさ自ら身に迫る思いがします。
                  また、江戸時代には徳川家のあつい崇敬により葵の御紋を許され、神戸侯を始め水谷検令（代官水谷九佐衛門）等からも崇められ、古くから全国崇敬者の信仰をあつめています。
                </p>
              </Grid.Column>
              <Grid.Column
                width={6}
                style={{ paddingBottom: '5em', paddingTop: '5em' }}
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  ご祭神
                </Header>
                <List
                  style={{ fontSize: '1.33em' }}
                  items={[
                    '倉稲魂神（うがのみたま）',
                    '大己貴命（おおなむちのみこと）',
                    '太田神（おおたのかみ） ',
                    '保食神（うけもちのかみ）',
                    '大宮能売神（おおみやのめのかみ）',
                  ]}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment padded="very" vertical>
          {/* <IntroBlurbs introBlurbs={intro.blurbs} /> */}

          <Grid container stackable verticalAlign="middle">
            <PlaceHolderIntroBlurbRow header={`狐の嫁入り神事`} />
            <PlaceHolderIntroBlurbRow header={`結婚式`} />
            <PlaceHolderIntroBlurbRow header={`御祈祷・出張祭典`} />
            <PlaceHolderIntroBlurbRow header={`授与品`} />
            <PlaceHolderIntroBlurbRow header={`境内案内`} />
            <PlaceHolderIntroBlurbRow header={`朔日参り`} />
            <PlaceHolderIntroBlurbRow header={`年間行事`} />
          </Grid>
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
