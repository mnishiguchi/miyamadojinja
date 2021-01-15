import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            address
            email
            phone
            phoneHref
            author
            gmapUrl
            directionsUrl
            facebook
            instagram
            twitter
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
