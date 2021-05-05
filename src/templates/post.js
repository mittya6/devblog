import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

export default ({ data }) => {

  return (
    <Layout>
      {data.markdownRemark.frontmatter.avatar && <Image fluid={data.markdownRemark.frontmatter.avatar.childImageSharp.fluid} />}
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark (id: {eq: $id}){
      html
      frontmatter {
        title
        avatar {
          childImageSharp {

            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }

          }
        }
      }
    }
  }
`