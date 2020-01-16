import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import {
  Card,
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react';
import Media from 'react-media';

import SEO from '../components/SEO';
import Layout from '../components/Layout';

export function IndexPageTemplate({ image, title, description }) {
  const backgroundImageUrl = !!image.childImageSharp
    ? image.childImageSharp.fluid.src
    : image;

  return (
    <>
      <SEO title={title} description={description} />

      <Media query={{ maxWidth: 599 }}>
        {matches => (
          <div
            style={{
              alignItems: `center`,
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              display: `flex`,
              justifyContent: `center`,
              width: '100vw',
              height: matches ? '50vh' : '80vh',
            }}
          />
        )}
      </Media>

      <Container>
        <Segment padded="very" vertical>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.7' }}>{description}</p>
        </Segment>

        <Segment padded="very" vertical clearing>
          <Header as="h2">由緒</Header>
          <p style={{ fontSize: '1.33em' }}>
            当社は、洲崎濱宮神明神社（すざきはまみやしんめいじんじゃ）の境内社で海山道開運稲荷神社と称し、丁度、前社は伊勢の内宮さま、後社は外宮さまに当り、境内社の方が著名であるのは誠に尊いことです。
          </p>
          <Image
            src={`img/logo-miyamado-san-text.jpg`}
            size="medium"
            floated="left"
          />
          <p style={{ fontSize: '1.33em' }}>
            俗に“みやまどさん”（総称海山道神社）とよばれるのは、伊勢路の伏見稲荷総社として高遠なる御神徳を称えて此の土地の地名で代称されているのです。
            その昔、西行の「昨日たち今日立ちみれば日永なる洲崎に見ゆる森のひとむら」と詠まれたと言うそのままの森は、神々しさ自ら身に迫る思いがします。
            また、江戸時代には徳川家のあつい崇敬により葵の御紋を許され、神戸侯を始め水谷検令（代官水谷九佐衛門）等からも崇められ、古くから全国崇敬者の信仰をあつめています。
          </p>
        </Segment>

        <Segment padded="very" vertical>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={8}>
                <Image src={`img/shinmeisha.jpg`} size="large" />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as="h2">洲崎濱宮神明神社 御祭神</Header>
                <List
                  style={{ fontSize: '1.33em' }}
                  items={[
                    '面足命',
                    '天照大御神',
                    '惶根神',
                    '仁徳天皇',
                    '建速須佐之男命',
                    '宇迦之御魂神',
                    '大山祇命',
                    '火之迦具土神',
                    '菅原道真公',
                    '火産霊神',
                    '保食神',
                    '倭姫命',
                  ]}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment padded="very" vertical>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={8}>
                <Image src={`img/torii-2875-1.jpg`} size="large" />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as="h2">海山道開運稲荷神社 御祭神</Header>
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
          <Media query={{ maxWidth: 599 }}>
            {matches => (
              <Card.Group
                centered
                items={[
                  {
                    header: '日本一の大きさの杉一木彫刻大天神像',
                    image: 'img/tenjinzo.jpg',
                    fluid: matches,
                    as: Link,
                    to: '/tenjinzo',
                  },
                  {
                    header: '狐の嫁入り神事',
                    image: 'img/setsubun-101.jpg',
                    fluid: matches,

                    as: Link,
                    to: '/yomeiri',
                  },
                  {
                    header: '祭礼市（朔日市場）',
                    image: 'img/saireiichi-101.jpg',
                    fluid: matches,

                    as: Link,
                    to: '/saireiichi',
                  },
                ]}
              />
            )}
          </Media>
        </Segment>
      </Container>
    </>
  );
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
};

function IndexPage({ data }) {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
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
        description
      }
    }
  }
`;
