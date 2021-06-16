import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>

    <div className="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s" uk-grid>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article className="uk-card ">
          {node.frontmatter.avatar && <Image fluid={node.frontmatter.avatar.childImageSharp.fluid} />}
          <h2>
            <Link to={`${node.fields.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields{
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY年MM月DD日")
            avatar {
              childImageSharp {
    
                fluid(maxWidth: 480, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
    
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
