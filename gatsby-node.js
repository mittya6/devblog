const path = require(`path`)

exports.createPages = async gatsbyNodeHelpers => {
  const { graphql, actions } = gatsbyNodeHelpers
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id: node.id
      }
    })
  })
}