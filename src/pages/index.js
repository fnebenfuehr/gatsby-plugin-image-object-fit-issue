import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "large.jpeg" }) {
      childImageSharp {
        id
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 1200)
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const image = getImage(data.file);

  return (
    <main
      style={{
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <title>Gatsby Plugin Image Object Fit Issue</title>
      <GatsbyImage
        image={image}
        style={{ width: "100%", maxHeight: "70vh" }}
        objectFit="contain"
        alt="Test Image"
      />
    </main>
  );
};

export default IndexPage;
