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

import Layout from '../components/Layout';
import KeidaiImage from '../components/KeidaiImage';
import miyamadosan from '../img/miyamadosan.svg';

export function IndexPageTemplate({ image, title, description }) {
  const backgroundImageUrl = !!image.childImageSharp
    ? image.childImageSharp.fluid.src
    : image;

  return (
    <>
      <Media query={{ maxWidth: 991 }}>
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
              height: matches ? '600px' : '900px',
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
          <Image src={miyamadosan} size="medium" floated="left" />
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
                    header: '大天神像（菅原道真公）',
                    meta: '日本一の大きさ',
                    image: 'img/tenjinzo.jpg',
                    fluid: matches,
                    as: Link,
                    to: '/tenjinzo',
                  },
                  {
                    header: '狐の嫁入り神事',
                    meta: '節分の日',
                    image: 'img/setsubun-101.jpg',
                    fluid: matches,
                    as: Link,
                    to: '/yomeiri',
                  },
                  {
                    header: '祭礼市（朔日市場）',
                    meta: '毎月1日',
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

        <Segment padded="very" vertical>
          <Header as="h2">境内案内</Header>
          <KeidaiImage />
          <Segment>
            {/* prettier-ignore */}
            <List horizontal celled relaxed>
              <List.Item as={Link} to={`/shinmeisha`} content={`洲崎濱宮神明神社`} />
              <List.Item as={Link} to={`/honden`} content={`海山道開運稲荷神社本殿`} />
              <List.Item as={Link} to={`/kigansho`} content={`(1) 交通安全祈願所`} />
              <List.Item content={`(2) 筆　塚`} />
              <List.Item as={Link} to={`/sukeshiro`} content={`(3) 助四郎社`} />
              <List.Item content={`(4) 大漁社`} />
              <List.Item content={`(5) 八十八社`} />
              <List.Item as={Link} to={`/yashima`} content={`(6) 八鳥治太夫碑`} />
              <List.Item content={`(7) 報国稲荷社`} />
              <List.Item content={`(8) 狐　塚`} />
              <List.Item content={`(9) 招福社`} />
              <List.Item content={`(10) 足留め社`} />
              <List.Item content={`(11) 長谷川社・真弓社`} />
              <List.Item content={`(12) 熊鷹社`} />
              <List.Item content={`(13) 安全社`} />
              <List.Item content={`(14) 橿原神宮遥拝所`} />
              <List.Item content={`(15) 眼鏡塚`} />
              <List.Item content={`(16) 合格社`} />
              <List.Item content={`(17) 助一社`} />
              <List.Item content={`(18) 厄除社`} />
              <List.Item content={`(19) 福寿社`} />
              <List.Item content={`(20) 福徳社`} />
              <List.Item content={`(21) 必勝社`} />
              <List.Item content={`(22) 玉富社`} />
              <List.Item content={`(23) 出世五社伏見社`} />
              <List.Item content={`(24) 成功社`} />
              <List.Item content={`(25) 春熊社`} />
              <List.Item content={`(26) 金生社`} />
              <List.Item content={`(27) 福龍社`} />
              <List.Item content={`(28) 白龍社`} />
              <List.Item as={Link} to={`/jinguyohaisho`} content={`(29) 神宮遥拝所`} />
              <List.Item content={`(30) 奉安庫`} />
              <List.Item content={`(31) 靖国神社遥拝所`} />
              <List.Item content={`(32) 納札所`} />
              <List.Item content={`(33) 豆まき舞台`} />
              <List.Item as={Link} to={`/tenjinzo`} content={`(34) 天神菅原社`} />
            </List>
          </Segment>
        </Segment>

        <Segment padded="very" vertical>
          <Header as="h2">交通案内</Header>
          <iframe
            title="miyamadojinja"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d418628.8591278057!2d136.34374831595818!3d34.94312300000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc695f13a514d79d5!2sMiyamado%20Shrine!5e0!3m2!1sen!2sus!4v1579256375306!5m2!1sen!2sus"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen=""
          ></iframe>

          <Segment vertical>
            <Header as="h3">公共交通機関でお越しのみなさまへ</Header>
            近鉄名古屋線 海山道駅下車すぐ　改札西出口より徒歩３０秒
          </Segment>

          <Segment vertical>
            <Header as="h3">伊勢湾岸自動車道でお越しのみなさまへ</Header>
            川越ＩＣ下車　国道２３号線　津方面 ２０分
          </Segment>

          <Segment vertical>
            <Header as="h3">名阪国道でお越しのみなさまへ</Header>
            亀山ＩＣ下車　国道１四日市方面号線　３０分
          </Segment>
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
