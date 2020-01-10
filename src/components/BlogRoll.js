import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import { Feed } from 'semantic-ui-react';
import PreviewCompatibleImage from './PreviewCompatibleImage';

function BlogRoll({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Feed>
      {edges &&
        edges.map(({ node: { id, frontmatter, fields, excerpt } }) => (
          <div key={id}>
            {frontmatter.featuredimage ? (
              <Feed.Event style={{ marginBottom: '1rem' }}>
                <Feed.Label style={{ maxWidth: '20rem' }}>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${frontmatter.title}`,
                    }}
                  />
                </Feed.Label>

                <Feed.Content>
                  <Feed.Date content={frontmatter.date} />
                  <Feed.Summary>
                    <Link to={fields.slug}>{frontmatter.title}</Link>

                    <p>{excerpt}</p>

                    <Link to={fields.slug}>Keep Reading →</Link>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            ) : null}
          </div>
        ))}
    </Feed>
  );
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
