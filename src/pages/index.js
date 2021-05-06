import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import RandomNameSpinner from "../components/RandomNameSpinner"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <RandomNameSpinner />
    </div>
  </Layout>
)

export default IndexPage
