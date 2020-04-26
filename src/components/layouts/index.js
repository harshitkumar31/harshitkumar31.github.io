import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"

import Header from '../header'

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
  <div>
    
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
    </div>
    {children}
  </div>
);
}


export default Layout
