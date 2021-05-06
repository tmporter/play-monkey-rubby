/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <main style={{ flex: 5 }}>{children}</main>
        <Footer style={{ flex: 1 }}>
          <p>
            Built by{" "}
            <a
              href="https://twitter.com/fleetfoxx"
              target="_blank"
              rel="noreferrer"
            >
              @fleetfoxx
            </a>
          </p>
          <p>
            Thanks to{" "}
            <a href="https://www.reddit.com/r/PaymoneyWubby/comments/mwyfxl/i_compiled_some_of_the_nicknames_from_chats_donos/">
              u/OneMostSerene
            </a>{" "}
            for compiling a list of the best donos.
          </p>
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </p>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
